import React from 'react';
import classNames from 'classnames/bind';

import Match from './Match';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const Matches = ({ user }) => (
  <div className={cx('matches-container')}>
    {user.matchedClients.map((client, clientIndex) => (
      <Match
        key={`match-client-${client.ID}-${clientIndex}`}
        user={user}
        client={client}
      />
    ))}
  </div>
);

export default Matches;
