import React from 'react';
import './App.scss';
import Home from './Home';
import NeedHelp from './NeedHelp';
import User from './User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/need-help">
          <NeedHelp />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
