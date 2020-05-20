import React from 'react';
import classNames from 'classnames/bind';

import Button from '../Button';

import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

const LoginForm = ({ formProps, emailProps, passwordProps, children }) => {
  return (
    <form className={cx('form')} {...formProps}>
      <div>
        <label className={cx('label')}>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            {...emailProps}
          />
        </label>
        <label className={cx('label')}>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            {...passwordProps}
          />
        </label>
      </div>
      {children && <div className={cx('container')}>{children}</div>}
      <div className={cx('container')}>
        <Button type="submit">Log In</Button>
      </div>
    </form>
  );
};

export default LoginForm;
