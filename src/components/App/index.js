import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Expert from 'components/Expert';
import Faq from 'components/Faq';
import GlobalContainer from 'components/GlobalContainer';
import Login from 'components/Login';
import Home from 'components/Home';
import SignUp from 'components/SignUp';
import User from 'components/User';
import { RouteList } from 'lib/routes';
import UserContextProvider from 'utils/context/UserContextProvider';
import SpreadsheetContextProvider from 'utils/context/SpreadsheetContextProvider';

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
