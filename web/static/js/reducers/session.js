import Constants from '../constants';

const initialState = {
  currentUser: null,
  socket: null,
  channel: null,
  error: null,
  topics: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_USER:
      return { ...state, currentUser: action.currentUser, socket: action.socket, channel: action.channel, error: null, topics: action.topics };

    case Constants.USER_SIGNED_OUT:
      return initialState;

    case Constants.SESSIONS_ERROR:
      return { ...state, error: action.error };

    case Constants.TOPIC_CREATED:
      state.topics.unshift(action.topic);
      return { ...state, topics: state.topics };

    default:
      return state;
  }
}
