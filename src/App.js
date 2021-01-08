import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Bars from './components/Bars';
import Lines from './components/Lines';
import Home from './components/Home';
import Table from './components/Table';

import './App.scss';
import { getAllCities } from './api/cities.js'

const App = () => {
  const [cities, setCities] = useState([])

    useEffect(() => {
        getAllCities().then(setCities)
    }, [])

  return (
    <Router>
    <div className="App">
     <Header/>
     <div className="App__container">
       <Switch>
        <Route exact path="/" render={() => <Home cities={cities} />} />
        <Route exact path="/table" render={() => <Table cities={cities} />} />
        <Route path="/bars" render={() => <Bars cities={cities} />} />
        <Route path="/lines" render={() => <Lines cities={cities} />} />
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
