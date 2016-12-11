import Constants from '../../constants';

const initialState = {
  topics: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.TOPICS_FETCHED:
      return { ...state, topics: action.topics };
    default:
      return state;
  }
}
