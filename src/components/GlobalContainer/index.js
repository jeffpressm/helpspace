import React from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import GlobalNav from 'components/GlobalNav';
import ContentNav from 'components/GlobalNav/ContentNav';
import DashboardNav from 'components/GlobalNav/AccountNav/Dashboard';
import ProfileNav from 'components/GlobalNav/AccountNav/Profile';
import HelpNav from 'components/GlobalNav/HelpNav';
import { RouteList } from 'lib/routes';
import { usePageView } from 'utils/hooks/usePageView';

import styles from './GlobalContainer.module.scss';

const cx = classNames.bind(styles);

function getNavTheme(pathname) {
  switch (pathname) {
    case RouteList.home:
    case RouteList.profile:
    case RouteList.register:
      return 'red';
    case RouteList.help:
      return 'gray';
    default:
      return 'white';
  }
}

function getPageNav(pathname) {
  if (pathname.includes(RouteList.dashboard)) {
    return <DashboardNav />;
  }
  if (pathname.includes(RouteList.profile)) {
    return <ProfileNav />;
  }
  if (pathname.includes(RouteList.help)) {
    return <HelpNav />;
  }
  return <ContentNav />;
}

const GlobalContainer = ({ children }) => {
  usePageView();
  const location = useLocation();
  const theme = getNavTheme(location.pathname);
  const pageNav = getPageNav(location.pathname);

  return (
    <div className={cx('root')}>
      <header
        className={cx('header', {
          'header--dashboard': location.pathname.includes(RouteList.dashboard),
        })}
      >
        <GlobalNav theme={theme}>{pageNav}</GlobalNav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalContainer;
