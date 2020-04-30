import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from 'components/Dashboard';
import Expert from 'components/Expert';
import Faq from 'components/Faq';
import GlobalContainer from 'components/GlobalContainer';
import Login from 'components/Login';
import Home from 'components/Home';
import HowTo from 'components/HowTo';
import Profile from 'components/Profile';
import User from 'components/User';
import Listing from 'components/Listing';
import Register from 'components/Register';
import { RouteList } from 'lib/routes';
import { USER_TYPE } from 'lib/users';
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
                <Route exact path={RouteList.help}>
                  <Redirect to={`${RouteList.help}/${USER_TYPE.CLIENT}`} />
                </Route>
                <Route path={`${RouteList.help}/${USER_TYPE.CLIENT}`}>
                  <HowTo as={USER_TYPE.CLIENT} />
                </Route>

                <Route path={`${RouteList.help}/${USER_TYPE.ADVISOR}`}>
                  <HowTo as={USER_TYPE.ADVISOR} />
                </Route>
                <Route exact path={RouteList.dashboard}>
                  <Redirect to={`${RouteList.dashboard}/give`} />
                </Route>
                <Route path={`${RouteList.dashboard}/:type`}>
                  <Dashboard />
                </Route>
                <Route path={RouteList.profile}>
                  <Profile />
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
