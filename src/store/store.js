import { createStore, applyMiddleware } from 'redux';
import cakeReducer from './reducers/cake';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;