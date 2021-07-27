import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cv from 'src/components/Cv';
import Home from 'src/components/Home';
import './app.scss';

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cv">
          <Cv />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
