import { createStore } from 'redux';
import cakeReducer from './reducers/cake';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;