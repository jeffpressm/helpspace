import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

import styles from './EmailForm.module.scss';

const cx = classNames.bind(styles);

const EmailForm = ({ formProps, inputProps, children }) => {
  const [touched, setTouched] = useState(false);

  return (
    <form className={cx('form', { touched: touched })} {...formProps}>
      <label className={cx('label')}>
        <input
          {...inputProps}
          type="email"
          placeholder="Email address"
          onBlur={() => setTouched(true)}
          required
        />
        <button className={cx('submit')} type="submit">
          <ArrowIcon />
        </button>
      </label>
      {children}
    </form>
  );
};

export default EmailForm;
