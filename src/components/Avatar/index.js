import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as AvatarIcon } from 'assets/icons/avatar.svg';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

const Avatar = ({ src }) => {
  if (src) {
    return <img className={cx('root')} src={src} alt="" />;
  }
  return <AvatarIcon />;
};

export default Avatar;
