import React from 'react';

import NoMatch from './Empty/NoMatch';
import Matches from './Matches';

const GiveHelp = ({ user }) =>
  user.matchedClients.length > 0 ? <Matches user={user} /> : <NoMatch />;

export default GiveHelp;
