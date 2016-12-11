import Constants     from '../constants';

const Actions = {};


Actions.connectToTopic = (topicId, socket, dispatch) => {
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
}

Actions.sendMessage = (message, topicId, channel) => {
  channel.push("message:new", { message: message, topicId: topicId })
}

export default Actions;
