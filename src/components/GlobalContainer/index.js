import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import { RouteList } from '../../lib/routes';
import GlobalNav from '../GlobalNav';

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

const GlobalContainer = ({ children }) => {
  const location = useLocation();
  const theme = getTheme(location.pathname);

  return (
    <div className={cx('root')}>
      <header className={cx('header')}>
        <GlobalNav theme={theme} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalContainer;
