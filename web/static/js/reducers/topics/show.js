import Constants from '../../constants';

const initialState = {
  messages: [],
  channel: null,
  topicId: null,
  showTopicInput: false,
  showMessageInput: false
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
    case Constants.SHOW_TOPIC_INPUT:
      return { ...state, showTopicInput: true };
    case Constants.HIDE_TOPIC_INPUT:
      return { ...state, showTopicInput: false };
    case Constants.SHOW_MESSAGE_INPUT:
      return { ...state, showMessageInput: true };
    case Constants.HIDE_MESSAGE_INPUT:
      return { ...state, showMessageInput: false };
    default:
      return state;
  }
}
