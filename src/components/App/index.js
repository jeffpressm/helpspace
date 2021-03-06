import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from 'components/Dashboard';
import DashboardRoot from 'components/Dashboard/Root';
import Faq from 'components/Faq';
import GlobalContainer from 'components/GlobalContainer';
import Login from 'components/Login';
import Home from 'components/Home';
import HowTo from 'components/HowTo';
import Profile from 'components/Profile';
import Register from 'components/Register';
import { RouteList } from 'lib/routes';
import FormProvider from 'utils/context/Form';

function App() {
  return (
    <Router>
      <FormProvider>
        <GlobalContainer>
          <Switch>
            <Route exact path={RouteList.home}>
              <Home />
            </Route>
            <Route path={RouteList.faq}>
              <Faq />
            </Route>
            <Route path={RouteList.login}>
              <Login />
            </Route>
            <Route path={RouteList.register}>
              <Register />
            </Route>
            <Route path={RouteList.help}>
              <HowTo />
            </Route>
            <Route
              exact
              path={RouteList.dashboard}
              component={DashboardRoot}
            ></Route>
            <Route path={`${RouteList.dashboard}/:type`}>
              <Dashboard />
            </Route>
            <Route path={RouteList.profile}>
              <Profile />
            </Route>
          </Switch>
        </GlobalContainer>
      </FormProvider>
    </Router>
  );
}

export default App;
