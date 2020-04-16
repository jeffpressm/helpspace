import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import GlobalNav from 'components/GlobalNav';
import { RouteList } from 'lib/routes';

import styles from './GlobalContainer.module.scss';

const cx = classNames.bind(styles);

function getTheme(pathname) {
  switch (pathname) {
    case RouteList.home:
    case RouteList.get:
    case RouteList.give:
      return 'red';
    default:
      return 'white';
  }
}

function getNavMode(pathname) {
  switch (pathname) {
    case RouteList.user:
    case RouteList.expert:
      return 'dashboard';
    default:
      return 'standard';
  }
}

const GlobalContainer = ({ children }) => {
  const location = useLocation();
  const theme = getTheme(location.pathname);
  const mode = getNavMode(location.pathname);

  return (
    <div className={cx('root')}>
      <header className={cx('header')}>
        <GlobalNav theme={theme} mode={mode} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalContainer;
