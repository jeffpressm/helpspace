import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Expert from 'components/Expert';
import Faq from 'components/Faq';
import GlobalContainer from 'components/GlobalContainer';
import Login from 'components/Login';
import Home from 'components/Home';
import User from 'components/User';
import Listing from 'components/Listing';
import Register from 'components/Register';
import { RouteList } from 'lib/routes';
import FormProvider from 'utils/context/Form';
import UserContextProvider from 'utils/context/UserContextProvider';
import SpreadsheetContextProvider from 'utils/context/SpreadsheetContextProvider';

function App() {
  return (
    <Router>
      <SpreadsheetContextProvider>
        <UserContextProvider>
          <FormProvider>
            <GlobalContainer>
              <Switch>
                <Route exact path={RouteList.home}>
                  <Home />
                </Route>
                <Route path={RouteList.client}>
                  <User />
                </Route>
                <Route path={RouteList.advisor}>
                  <Expert />
                </Route>
                <Route path={RouteList.faq}>
                  <Faq />
                </Route>
                <Route path={RouteList.login}>
                  <Login />
                </Route>
                <Route path={RouteList.listing}>
                  <Listing />
                </Route>
                <Route path={RouteList.register}>
                  <Register />
                </Route>
              </Switch>
            </GlobalContainer>
          </FormProvider>
        </UserContextProvider>
      </SpreadsheetContextProvider>
    </Router>
  );
}

export default App;
