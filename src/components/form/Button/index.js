import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ children, className, ...rest }) => (
  <button className={cx(['root', className])} {...rest}>
    {children}
  </button>
);

export default Button;
