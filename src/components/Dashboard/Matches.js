import React from 'react';
import classNames from 'classnames/bind';

import Match from './Match';
import ContentBox from 'components/layout/ContentBox';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

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
