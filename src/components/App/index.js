import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cv from 'src/components/Cv';
import Home from 'src/components/Home';
import Header from 'src/components/Home/Header';
import './app.scss';
import toto from 'src/assets/images/background.jpg';

const App = () => (
  <div className="mainHome" style={{ backgroundImage: `url(${toto})` }}>
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
      <Route path="/cv">
        <Cv />
      </Route>
    </Switch>
  </div>
);

export default App;
