import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as AvatarIcon } from 'assets/icons/avatar.svg';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

const Avatar = ({ src }) => {
  const asset = src ? <img src={src} alt="" /> : <AvatarIcon />;
  return <div className={cx('root')}>{asset}</div>;
};

export default Avatar;
