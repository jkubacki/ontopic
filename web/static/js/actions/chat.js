import Constants     from '../constants';

const Actions = {};


Actions.connectToChannel = (socket) => {
  return dispatch => {
    const channel = socket.channel("topics:lobby")

    channel.join().receive('ok', (response) => {
      console.log('connected to channel chat:topic');
    }).receive('error', (response) => {
      console.log('errored connection to channel chat:topic')
    })
  }
}

Actions.sendMessage = (message) => {

  // TODO

  return dispatch => {
    dispatch({
      type: Constants.CHAT_SEND_MESSAGE,
      message: message,
    });
  }
}

export default Actions;
