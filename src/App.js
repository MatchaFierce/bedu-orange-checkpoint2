import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Users from './components/Users';
import Dependents from './components/Dependents';

import './App.css';


const App = (props) => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Header />
        <br />
        <Route exact path='/usuarios' component={Users} />
        <Route exact path='/dependientes' component={Dependents} />
      </div>
    </BrowserRouter>
  </div>
);


export default App;
