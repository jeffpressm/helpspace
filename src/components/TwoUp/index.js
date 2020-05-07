import React from 'react';
import classNames from 'classnames/bind';

import styles from './TwoUp.module.scss';

const cx = classNames.bind(styles);

const TwoUp = ({ slot1, slot2, className }) => (
  <div className={cx('root', className)}>
    <div className={cx('slot')}>{slot1}</div>
    <div className={cx('slot')}>{slot2}</div>
  </div>
);

export default TwoUp;
