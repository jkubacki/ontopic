import Constants     from '../constants';

const Actions = {};


Actions.connectToChannel = (socket) => {
  return dispatch => {
    const channel = socket.channel("chat:topic")

    channel.join().receive('ok', (response) => {
      console.log('connected to channel chat:topic');
    }).receive('error', (response) => {
      console.log('errored connection to channel chat:topic')
    })
  }


  // channel.join().receive('ok', (response) => {
  //   dispatch({
  //     type: Constants.BOARDS_SET_CURRENT_BOARD,
  //     board: response.board,
  //   });

  //   dispatch({
  //     type: Constants.CURRENT_BOARD_CONNECTED_TO_CHANNEL,
  //     channel: channel,
  //   });
  // });
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
