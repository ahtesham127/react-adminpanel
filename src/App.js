import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCustom from './Components/NavBarCustom';
import About from './Components/About';
import Main from './Components/Main';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <NavBarCustom/>
        <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
      </Switch>
    

    </React.Fragment>
  );
}

export default App;
