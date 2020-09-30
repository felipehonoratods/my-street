import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Abouts from './components/pages/Abouts';
import Occurrence from './components/pages/Occurrence';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={Abouts} />
          <Route path='/occurrences' component={Occurrence} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
