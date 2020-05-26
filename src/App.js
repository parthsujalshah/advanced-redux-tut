import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
