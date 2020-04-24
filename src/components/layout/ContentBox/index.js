import React from 'react';
import classNames from 'classnames/bind';

import styles from './ContentBox.module.scss';

const cx = classNames.bind(styles);

const ContentBox = ({ theme = 'white', children }) => (
  <div className={cx('root', [theme])}>
    <div className={cx('content-container')}>{children}</div>
  </div>
);

export default ContentBox;
