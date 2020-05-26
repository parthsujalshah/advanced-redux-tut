import {createStore} from 'redux';
import cakeReducer from './reducers/cake';

const store = createStore(cakeReducer);

export default store;