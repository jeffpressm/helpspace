import React from 'react';
import Home from './Home';
import NeedHelp from './NeedHelp';
import User from './User';
import Faq from './Faq';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContextProvider from './utils/context/UserContextProvider';
import SpreadsheetContextProvider from './utils/context/SpreadsheetContextProvider';

function App() {
  return (
    <Router>
      <SpreadsheetContextProvider>
        <UserContextProvider>
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
            <Route path="/faq">
              <Faq />
            </Route>
          </Switch>
        </UserContextProvider>
      </SpreadsheetContextProvider>
    </Router>
  );
}

export default App;
