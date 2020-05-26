import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/actions/user';

const UserContainer = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const globalState = useSelector(state => state.user);
  return globalState.loading ? (
    <h2>Loading</h2>
  ) : globalState.error ? (
    <h2>{globalState.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {
        globalState && globalState.users && globalState.users.map(user => <p>{user.name}</p>)
      }
    </div>
  );
};

export default UserContainer;