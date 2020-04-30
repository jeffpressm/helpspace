import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';
import { RouteList } from 'lib/routes';
import useSearchParams from 'utils/hooks/useSearchParams';

import { ReactComponent as DashboardIcon } from './assets/dashboard.svg';
import styles from './AccountNav.module.scss';

const cx = classNames.bind(styles);

const ProfileNav = () => {
  const history = useHistory();
  const query = useSearchParams();
  const email = query?.get('email');

  const doLogout = useCallback(() => {
    window.localStorage.removeItem('email');
    history.push(RouteList.home);
  }, [history]);

  return (
    <div className={cx('root', 'root--profile')}>
      <div className={cx('section', 'section--1')}>
        <div className={cx('section-link')}>
          <span className={cx('copy')}>your profile</span>
        </div>
        <div className={cx('section-link')}>
          <button onClick={() => doLogout()}>log out</button>
        </div>
      </div>
      <div className={cx('section', 'section--2')}>
        <div className={cx('user-link', 'help')}>
          <Link to={RouteList.help}>
            <HelpIcon />
          </Link>
        </div>
        <div className={cx('user-link', 'avatar')}>
          <Link to={`${RouteList.dashboard}?email=${email}`}>
            <DashboardIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
