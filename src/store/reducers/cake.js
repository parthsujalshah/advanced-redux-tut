import { BUY_CAKE } from '../actions/cake';

const initialState = {
  numberOfCakes: 10
};

const cakeReducer = (state, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes - 1
    }
    default:
      return state
  };
};

export default cakeReducer;