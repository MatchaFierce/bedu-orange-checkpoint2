import React, { Component } from 'react';
import './App.css';
import store from './state/store/store';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        </div>
      </Provider>
    );
  }
}


export default App;
