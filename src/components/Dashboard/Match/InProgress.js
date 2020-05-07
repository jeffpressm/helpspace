import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import Avatar from 'components/Avatar';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

import styles from '../Dashboard.module.scss';

const cx = classNames.bind(styles);

const InProgress = ({ match, user }) => {
  const { content } = useContext(SpreadsheetContext);
  const DashboardContent = pivotTable(content['Dashboard']);

  return (
    <>
      <div className={cx('info-wrapper')}>
        <h4 className={cx('info-wrapper-title')}>
          {match.advisor
            ? `You've been matched with ${match.advisor['Name']}`
            : `You’re helping ${match['Name']}`}
        </h4>
        <p className={cx('info-wrapper-text')}>
          {DashboardContent['Matched Body']}
        </p>
      </div>
      <div className={cx('image-wrapper')}>
        <div className={cx('match-image')}>
          <Avatar src={user.image} />
        </div>
        <div className={cx('match-image')}>
          <Avatar
            src={match.advisor ? match.advisor['Image'] : match['Image']}
          />
        </div>
      </div>
    </>
  );
};

export default InProgress;
