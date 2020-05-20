import React from 'react';
import classNames from 'classnames/bind';

import Avatar from 'components/Avatar';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const ProfileHeader = ({ user }) => {
  return (
    <div className={cx('root')}>
      <div className={cx('heading')}>
        <h1>{user?.name}</h1>
      </div>
      <div className={cx('avatar')}>
        <Avatar src={user?.image} />
      </div>
    </div>
  );
};

export default ProfileHeader;
