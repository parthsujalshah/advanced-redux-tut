import {combineReducers} from 'redux';
import cakeReducer from './reducers/cake';
import iceCreamReducer from './reducers/iceCream';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
});

export default rootReducer