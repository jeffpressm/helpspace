import React from 'react';
import classNames from 'classnames/bind';

import completeImage from 'assets/illustrations/illustration 10.png';

import styles from '../Dashboard.module.scss';

const cx = classNames.bind(styles);

const Complete = ({ client, user, isClient }) => {
  return (
    <div className={cx('complete-image-wrapper')}>
      <div className={cx('complete-side-image-wrapper')}>
        <img alt="" className={cx('complete-icon')} src={user.image} />
      </div>
      <div className={cx('complete-illustration-wrapper')}>
        <img alt="" src={completeImage} />
      </div>
      <div className={cx('complete-side-image-wrapper')}>
        <img
          alt=""
          className={cx('complete-icon')}
          src={isClient ? client.advisor['Image'] : client['Image']}
        />
      </div>
    </div>
  );
};

export default Complete;
