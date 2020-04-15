import React from 'react';
import SignUp from './SignUp';
import Home from './components/Home';
import User from './User';
import Faq from './Faq';
import Expert from './Expert';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContextProvider from './utils/context/UserContextProvider';
import SpreadsheetContextProvider from './utils/context/SpreadsheetContextProvider';
import { RouteList } from './lib/routes';

import GlobalContainer from './components/GlobalContainer';

function App() {
  return (
    <Router>
      <SpreadsheetContextProvider>
        <UserContextProvider>
          <GlobalContainer>
            <Switch>
              <Route exact path={RouteList.home}>
                <Home />
              </Route>
              <Route path={RouteList.get}>
                <SignUp formUrl={process.env.REACT_APP_CLIENT_TYPEFORM_URL} />
              </Route>
              <Route path={RouteList.give}>
                <SignUp formUrl={process.env.REACT_APP_EXPERT_TYPEFORM_URL} />
              </Route>
              <Route path={RouteList.user}>
                <User />
              </Route>
              <Route path={RouteList.expert}>
                <Expert />
              </Route>
              <Route path={RouteList.faq}>
                <Faq />
              </Route>
              <Route path={RouteList.login}>
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
