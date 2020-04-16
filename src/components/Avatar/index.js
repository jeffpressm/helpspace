import React from 'react';

import styles from './Avatar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Avatar = ({ name }) => {
  return <div className={cx('root')}>{name.charAt(0)}</div>;
};

export default Avatar;
