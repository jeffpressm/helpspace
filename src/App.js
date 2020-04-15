import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import User from './User';
import Faq from './Faq';
import Expert from './Expert';
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
            <Route path="/get-help">
              <SignUp formUrl={process.env.REACT_APP_CLIENT_TYPEFORM_URL} />
            </Route>
            <Route path="/give-help">
              <SignUp formUrl={process.env.REACT_APP_EXPERT_TYPEFORM_URL} />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/expert/:userId">
              <Expert />
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
