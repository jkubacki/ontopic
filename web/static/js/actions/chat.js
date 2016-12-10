import Constants     from '../constants';

const Actions = {};

Actions.sendMessage = (message) => {
  console.log(`Sending ${message}`);

  return dispatch => {
    dispatch({
      type: Constants.CHAT_SEND_MESSAGE,
      message: message,
    });
  }
}

export default Actions;
