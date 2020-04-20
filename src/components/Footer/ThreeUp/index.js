import React from 'react';
import classNames from 'classnames/bind';

import styles from './ThreeUp.module.scss';

const cx = classNames.bind(styles);

const ThreeUp = ({ slot1, slot2, slot3 }) => (
  <div className={cx('root')}>
    <div>{slot1}</div>
    <div>{slot2}</div>
    <div>{slot3}</div>
  </div>
);

export default ThreeUp;
