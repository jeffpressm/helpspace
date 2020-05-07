import React from 'react';

import Match from './Match/Match';
import ContentBox from 'components/layout/ContentBox';

const Matches = ({ user }) => (
  <ContentBox isTop>
    {user.matches.map((match, i) => (
      <Match key={match.ID} user={user} match={match} />
    ))}
  </ContentBox>
);

export default Matches;
