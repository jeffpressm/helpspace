import React from 'react';
import classNames from 'classnames/bind';

import { matchStatusType } from 'lib/status';

import { ReactComponent as GoogleSheetIcon } from 'assets/icons/google-sheet.svg';
import { ReactComponent as DashboardArrowIcon } from 'assets/icons/dashboard-arrow.svg';

import InProgress from './InProgress';
import Complete from './Complete';

import styles from '../Dashboard.module.scss';

const cx = classNames.bind(styles);

const Match = ({ client, user }) => {
  const matchStatusComplete = client['Status'] === matchStatusType.complete;
  return (
    <div className={cx('match-container')}>
      <h3 className={cx('match-title')}>
        {matchStatusComplete ? (
          <span>{`You helped ${client['Name']} manage her lease during the COVID-19 crisis`}</span>
        ) : (
          client['Challenge']
        )}
      </h3>
      <div className={cx('match-box')}>
        {matchStatusComplete ? (
          <Complete client={client} user={user} />
        ) : (
          <InProgress client={client} user={user} />
        )}
      </div>
      <a
        className={cx('view-project-link')}
        href={client['Doc Url']}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoogleSheetIcon />
        <span className={cx('view-project-link-text')}>View project</span>
        <DashboardArrowIcon />
      </a>
    </div>
  );
};

export default Match;
