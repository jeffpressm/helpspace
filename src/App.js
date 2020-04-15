import React from 'react';
import SignUp from './SignUp';
import Home from './components/Home';
import Give from './components/Give';
import User from './User';
import Faq from './Faq';
import Expert from './Expert';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContextProvider from './utils/context/UserContextProvider';
import SpreadsheetContextProvider from './utils/context/SpreadsheetContextProvider';

import GlobalContainer from './components/GlobalContainer';

function App() {
  return (
    <Router>
      <SpreadsheetContextProvider>
        <UserContextProvider>
          <GlobalContainer>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/get">
                <SignUp formUrl={process.env.REACT_APP_CLIENT_TYPEFORM_URL} />
              </Route>
              <Route path="/give">
                <SignUp formUrl={process.env.REACT_APP_EXPERT_TYPEFORM_URL} />
              </Route>
              <Route path="/give">
                <Give />
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
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </GlobalContainer>
        </UserContextProvider>
      </SpreadsheetContextProvider>
    </Router>
  );
}

export default App;
