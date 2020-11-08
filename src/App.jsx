import React from 'react'
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
    <>
    <Switch>
      <Route path='/' exact component={Home} /> 
      <Route path='/about' exact component={About} /> 
    </Switch>
     
    </>
    </BrowserRouter>
  );
}

export default App;
