import React, { Component } from 'react';
import './App.css';
import store from './state/store/store';
import { Provider } from 'react-redux'
import UsuarioMenu from './Components/Usuario/UsuarioMenu/usuarioMenu';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <UsuarioMenu></UsuarioMenu>
        </div>
      </Provider>
    );
  }
}


export default App;
