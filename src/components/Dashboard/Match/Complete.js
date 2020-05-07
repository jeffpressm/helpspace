import React from 'react';
import classNames from 'classnames/bind';

import completeImage from 'assets/illustrations/illustration 10.png';
import Avatar from 'components/Avatar';

import styles from '../Dashboard.module.scss';

const cx = classNames.bind(styles);

const Complete = ({ match, user, isClient }) => {
  return (
    <div className={cx('complete-image-wrapper')}>
      <div className={cx('complete-side-image-wrapper')}>
        <Avatar src={user.image} />
      </div>
      <div className={cx('complete-illustration-wrapper')}>
        <img alt="" src={completeImage} />
      </div>
      <div className={cx('complete-side-image-wrapper')}>
        <Avatar src={isClient ? match.advisor['Image'] : match['Image']} />
      </div>
    </div>
  );
};

export default Complete;
