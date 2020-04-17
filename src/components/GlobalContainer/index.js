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

function getNavTarget(pathname) {
  switch (pathname) {
    case RouteList.get:
    case RouteList.give:
      return '_blank';
    default:
      return '_self';
  }
}

const GlobalContainer = ({ children }) => {
  const location = useLocation();
  const theme = getNavTheme(location.pathname);
  const mode = getNavMode(location.pathname);
  const target = getNavTarget(location.pathname);

  return (
    <div className={cx('root')}>
      <header className={cx('header')}>
        <GlobalNav theme={theme} mode={mode} target={target} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalContainer;
