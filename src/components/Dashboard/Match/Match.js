import React from 'react';
import classNames from 'classnames/bind';

import { matchStatusType } from 'lib/status';

import { ReactComponent as GoogleSheetIcon } from 'assets/icons/google-sheet.svg';
import { ReactComponent as DashboardArrowIcon } from 'assets/icons/dashboard-arrow.svg';
import ExternalLink from 'components/ExternalLink';

import InProgress from './InProgress';
import Complete from './Complete';

import styles from '../Dashboard.module.scss';

const cx = classNames.bind(styles);

const Match = ({ match, user }) => {
  const isComplete = match['Status'] === matchStatusType.complete;
  const isInProgress = match['Status'] === matchStatusType.inProgress;

  return (
    <div className={cx('match-container')}>
      <h3 className={cx('match-title')}>
        {isComplete && (
          <span>
            {match.advisor
              ? `${match.advisor['Name']} helped you with: ${match['Challenge']}`
              : `You helped ${match['Name']}: ${match['Challenge']}`}
          </span>
        )}
        {isInProgress && <span>{match['Challenge']}</span>}
      </h3>
      <div className={cx('match-box')}>
        {isComplete && (
          <Complete isClient={match.advisor} match={match} user={user} />
        )}
        {isInProgress && <InProgress match={match} user={user} />}
      </div>
      <ExternalLink className={cx('view-project-link')} href={match['Doc Url']}>
        <GoogleSheetIcon />
        <span className={cx('view-project-link-text')}>View project</span>
        <DashboardArrowIcon />
      </ExternalLink>
    </div>
  );
};

export default Match;
