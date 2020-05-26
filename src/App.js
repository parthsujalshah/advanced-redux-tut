import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './store/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
