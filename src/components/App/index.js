/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cv from 'src/components/Cv';
import Home from 'src/components/Home';
import './app.scss';
// import 'src/components/Cv/cv.scss';
// import 'src/components/Home/home.scss';

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
