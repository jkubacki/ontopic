import Constants from '../constants';

const initialState = {
  messages: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CHAT_SEND_MESSAGE:
      state.messages.push(action.message);
      return { ...state, messages: state.messages };

    default:
      return state;
  }
}
