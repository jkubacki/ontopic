import Constants from '../constants';

const initialState = {
  messages: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CHAT_SEND_MESSAGE:
      state.messages.push(action.message);
      return { ...state, messages: state.messages };
    case Constants.CHAT_CONNECTED_TO_CHANNEL:
      return { ...state, channel: action.channel };
    default:
      return state;
  }
}
