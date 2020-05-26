import {combineReducers} from 'redux';
import cakeReducer from './reducers/cake';
import iceCreamReducer from './reducers/iceCream';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer