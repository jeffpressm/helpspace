import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';
import { RouteList } from 'lib/routes';

import { ReactComponent as DashboardIcon } from './assets/dashboard.svg';
import styles from './AccountNav.module.scss';

const cx = classNames.bind(styles);

export const SubNav = ({ className }) => {
  const history = useHistory();

  const doLogout = useCallback(() => {
    window.localStorage.removeItem('email');
    history.push(RouteList.home);
  }, [history]);

  return (
    <div className={cx('section', className)}>
      <div className={cx('section-link-container')}>
        <span className={cx('link-item', 'link-item--label', 'selected')}>
          your profile
        </span>
      </div>
      <div className={cx('section-link-container')}>
        <button
          className={cx('link-item', 'link-item--button')}
          onClick={() => doLogout()}
        >
          log out
        </button>
      </div>
    </div>
  );
};

const ProfileNav = () => {
  return (
    <div className={cx('root', 'root--profile')}>
      <SubNav className={cx('section--1')} />
      <div className={cx('section', 'section--2')}>
        <div className={cx('user-link', 'help')}>
          <Link
            to={{
              pathname: RouteList.help,
              search: `?from=${RouteList.profile}`,
            }}
          >
            <HelpIcon />
          </Link>
        </div>
        <div className={cx('user-link', 'avatar')}>
          <Link to={RouteList.dashboard}>
            <DashboardIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
