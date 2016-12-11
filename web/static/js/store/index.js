import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, syncHistory } from 'react-router-redux';
import reducers from '../reducers';
import { browserHistory } from 'react-router';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware, loggerMiddleware))
}
