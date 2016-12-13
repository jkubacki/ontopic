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
  });

  channel.on("message:created", (msg) => {
    dispatch({
      type: Constants.CHAT_NEW_MESSAGE,
      message: msg.message,
    });
  })

  channel.on("topic:created", (msg) => {
    if (currentUser.id == msg.user_id) {
      dispatch({
        type: Constants.TOPIC_CREATED,
        topic: msg.topic,
      });
      Actions.hideTopicForm(dispatch)
      Actions.changeTopic(msg.topic.id, channel, socket, currentUser, dispatch)
    }
  })
}

Actions.changeTopic = (topicId, channel, socket, currentUser, dispatch) => {
  channel.leave();
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

Actions.showTopicForm = (dispatch) => {
  dispatch({
    type: Constants.SHOW_TOPIC_FORM
  });
}

Actions.hideTopicForm = (dispatch) => {
  dispatch({
    type: Constants.HIDE_TOPIC_FORM
  });
}

Actions.createTopic = (topic, channel) => {
  channel.push("topic:new", { topic: topic })
}

export default Actions;