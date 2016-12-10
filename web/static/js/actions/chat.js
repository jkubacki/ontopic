import Constants     from '../constants';

const Actions = {};


Actions.connectToChannel = (socket, dispatch) => {
  const channel = socket.channel("topics:lobby")

  channel.join().receive("ok", (response) => {
    dispatch({
      type: Constants.CHAT_CONNECTED_TO_CHANNEL,
      channel: channel,
    });
  });

  return dispatch => {
    dispatch({
      type: Constants.CHAT_SEND_MESSAGE,
      message: message,
    });
  }
}

export default Actions;
