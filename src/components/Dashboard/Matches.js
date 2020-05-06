import React from 'react';

import Match from './Match/Match';
import ContentBox from 'components/layout/ContentBox';

const Matches = ({ user }) => (
  <ContentBox isTop>
    {user.matchedClients.map((client, clientIndex) => (
      <Match
        key={`match-client-${client.ID}-${clientIndex}`}
        user={user}
        client={client}
      />
    ))}
  </ContentBox>
);

export default Matches;
