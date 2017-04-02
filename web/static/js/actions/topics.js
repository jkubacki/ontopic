import { push } from 'react-router-redux';
import Constants from '../constants';

const Actions = {};


Actions.connectToTopic = (topicId, socket, currentUser, dispatch) => {
  const channel = socket.channel(`topics:${topicId}`)

  channel.join().receive("ok", (response) => {
    dispatch({
      type: Constants.CHAT_CONNECTED_TO_CHANNEL,
      channel: channel,
      messages: response.messages,
      topicId: topicId
    });
    Actions.hideTopicInput(dispatch);
    Actions.showMessageInput(dispatch);
  });

  channel.on("message:created", (msg) => {
    dispatch({
      type: Constants.CHAT_NEW_MESSAGE,
      message: msg.message,
    });
  })
}

Actions.changeTopic = (topicId, socket, currentUser, dispatch) => {
  for (var channel of socket.channels) {
    if (channel.topic.includes("topics:")) {
      channel.leave();
    }
  }
  Actions.connectToTopic(topicId, socket, currentUser, dispatch);
  dispatch(push(`/${topicId}`));
}

Actions.leaveTopic = (channel, dispatch) => {
  channel.leave();
  dispatch({
    type: Constants.CHAT_LEAVE_CHANNEL
  });
}

Actions.sendMessage = (message, topicId, channel) => {
  channel.push("message:new", { message: message, topicId: topicId })
}

Actions.showTopicInput = (dispatch) => {
  dispatch({
    type: Constants.SHOW_TOPIC_INPUT
  });
}

Actions.hideTopicInput = (dispatch) => {
  dispatch({
    type: Constants.HIDE_TOPIC_INPUT
  });
}
Actions.showMessageInput = (dispatch) => {
  dispatch({
    type: Constants.SHOW_MESSAGE_INPUT
  });
}

Actions.hideMessageInput = (dispatch) => {
  dispatch({
    type: Constants.HIDE_MESSAGE_INPUT
  });
}

Actions.createTopic = (topic, channel) => {
  channel.push("topic:new", { topic: topic })
}

export default Actions;
