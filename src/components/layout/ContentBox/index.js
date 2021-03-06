import React from 'react';
import classNames from 'classnames/bind';

import styles from './ContentBox.module.scss';

const cx = classNames.bind(styles);

const ContentBox = ({
  theme = 'white',
  isTop = false,
  className,
  childClassName,
  children
}) => (
  <div className={cx('root', [theme], { top: isTop }, className)}>
    <div className={cx('content-container', childClassName)}>{children}</div>
  </div>
);

export default ContentBox;
