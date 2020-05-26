import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../store/actions/cake';

const NewCakeContainer = props => {
  const [number, setNumber] = useState(1);
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  );
};

export default NewCakeContainer;