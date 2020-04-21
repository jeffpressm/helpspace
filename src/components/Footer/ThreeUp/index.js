import React from 'react';
import classNames from 'classnames/bind';

import styles from './ThreeUp.module.scss';

const cx = classNames.bind(styles);

const ThreeUp = ({ slot1, slot2, slot3 }) => (
  <div className={cx('root')}>
    <div className={cx('slot')}>{slot1}</div>
    <div className={cx('slot')}>{slot2}</div>
    <div className={cx('slot')}>{slot3}</div>
  </div>
);

export default ThreeUp;
