import React from 'react';
import Home from './Home';
import NeedHelp from './NeedHelp';
import User from './User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useTabletop from './utils/hooks/useTabletop';

function App() {
  const tdata = useTabletop('1SMus2rG-kjfy2SXASC-V8trxB4BFF7ITx-QvaoBOags');

  console.log(tdata);
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
