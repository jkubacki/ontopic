import { combineReducers }  from 'redux';
import { routeReducer }     from 'react-router-redux';
import session              from './session';
import registration         from './registration';
import chat                 from './chat';
import topics               from './topics';

export default combineReducers({
  routing: routeReducer,
  session: session,
  registration: registration,
  chat: chat,
  topics: topics,
});
