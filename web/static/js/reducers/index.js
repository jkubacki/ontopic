import { combineReducers }  from 'redux';
import { routeReducer }     from 'react-router-redux';
import session              from './session';
import registration         from './registration';
import topics               from './topics';
import topic                from './topics/show';

export default combineReducers({
  routing: routeReducer,
  session: session,
  registration: registration,
  topic: topic,
  topics: topics,
});
