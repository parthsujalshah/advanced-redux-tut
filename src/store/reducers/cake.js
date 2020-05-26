import { BUY_CAKE } from '../actions/cake';

const initialState = {
  numberOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: 
    return {
      ...state,
      numberOfCakes: state.numberOfCakes - parseInt(action.payload)
    }
    default:
      return state
  };
};

export default cakeReducer;