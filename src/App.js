import React, { Component } from 'react';
import store from './state/store/store';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="" render={() => <h1>Estás en usuarios</h1>}></Route>
              <Route path="/dependientes" render={() => <h1>Estás en dependientes</h1>}></Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}


export default App;
