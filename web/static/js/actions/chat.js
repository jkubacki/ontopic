import Constants     from '../constants';

const Actions = {};

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
