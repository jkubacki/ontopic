import Constants from '../constants';
import {httpGet} from '../utils'

const Actions = {};

Actions.fetchTopics = (dispatch) => {
  httpGet('/api/v1/topics').then((data) => {
    dispatch({
      type: Constants.TOPICS_FETCHED,
      topics: data.topics
    })
  })
}

export default Actions;
