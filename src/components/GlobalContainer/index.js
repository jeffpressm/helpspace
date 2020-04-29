import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import GlobalNav from 'components/GlobalNav';
import { RouteList } from 'lib/routes';

import styles from './GlobalContainer.module.scss';

const cx = classNames.bind(styles);

function getNavTheme(pathname) {
  switch (pathname) {
    case RouteList.home:
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

function getPageTheme(pathname) {
  switch (pathname) {
    case RouteList.register:
      return 'red';
    default:
      return 'white';
  }
}

const GlobalContainer = ({ children }) => {
  const location = useLocation();
  const theme = getNavTheme(location.pathname);
  const mode = getNavMode(location.pathname);
  const page = getPageTheme(location.pathname);

  return (
    <div className={cx('root', [page])}>
      <header className={cx('header')}>
        <GlobalNav theme={theme} mode={mode} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalContainer;
