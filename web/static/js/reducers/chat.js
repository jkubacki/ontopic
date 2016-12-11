import Constants from '../constants';

const initialState = {
  messages: [],
  channel: null,
  topicId: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CHAT_NEW_MESSAGE:
      state.messages.push(action.message);
      return { ...state, messages: state.messages };
    case Constants.CHAT_CONNECTED_TO_CHANNEL:
      return { ...state, channel: action.channel, messages: action.messages, topicId: action.topicId };
    case Constants.CHAT_LEAVE_CHANNEL:
      return initialState;
    default:
      return state;
  }
}
