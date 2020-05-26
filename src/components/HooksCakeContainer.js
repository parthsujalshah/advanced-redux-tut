import React from 'react';
import { useSelector } from 'react-redux'

const HooksCakeContainer = props => {
  const numberOfCakes = useSelector(state => state.numberOfCakes);
  return (
    <div>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <button>Buy Cakes</button>
    </div>
  );
};

export default HooksCakeContainer;