import React from 'react';
import Home from './Home';
import NeedHelp from './NeedHelp';
import User from './User';
import Faq from './Faq';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContextProvider from './utils/context/UserContextProvider';
import ResponsesContextProvider from './utils/context/ResponsesContextProvider';
import CmsContextProvider from './utils/context/CmsContextProvider';

function App() {
  return (
    <Router>
      <ResponsesContextProvider>
        <UserContextProvider>
          <CmsContextProvider>
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
          </CmsContextProvider>
        </UserContextProvider>
      </ResponsesContextProvider>
    </Router>
  );
}

export default App;
