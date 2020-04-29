import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { RouteList } from 'lib/routes';

import styles from './GlobalNav.module.scss';

const cx = classNames.bind(styles);

const GlobalNav = ({ theme, children }) => {
  return (
    <div className={cx('root', [theme])}>
      <div className={cx('logo-container')}>
        <Link to={RouteList.home}>
          <Logo />
        </Link>
      </div>
      <div className={cx('link-container')}>{children}</div>
    </div>
  );
};

export default GlobalNav;
