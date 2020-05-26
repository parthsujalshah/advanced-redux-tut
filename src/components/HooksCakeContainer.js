import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../store/actions/cake';

const HooksCakeContainer = props => {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  );
};

export default HooksCakeContainer;