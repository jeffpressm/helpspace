import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

import styles from '../Dashboard.module.scss';

const cx = classNames.bind(styles);

const InProgress = ({ client, user }) => {
  const { content } = useContext(SpreadsheetContext);
  const DashboardContent = pivotTable(content['Dashboard']);

  return (
    <>
      <div className={cx('info-wrapper')}>
        <h4 className={cx('info-wrapper-title')}>
          {client.advisor
            ? `Schedule an introductory call with ${client.advisor['Name']}`
            : `You’re helping ${client['Name']}`}
        </h4>
        <p className={cx('info-wrapper-text')}>
          {DashboardContent['Matched Body']}
        </p>
      </div>
      <div className={cx('image-wrapper')}>
        <img alt="" className={cx('match-image')} src={user.image} />
        <img
          alt=""
          className={cx('client-image', 'match-image')}
          src={client.advisor ? client.advisor['Image'] : client['Image']}
        />
      </div>
    </>
  );
};

export default InProgress;
