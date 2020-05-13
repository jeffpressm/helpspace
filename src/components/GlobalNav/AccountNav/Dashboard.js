import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';
import Avatar from 'components/Avatar';
import { RouteList } from 'lib/routes';
import useSearchParams from 'utils/hooks/useSearchParams';
import useUser from 'utils/hooks/useUser';

import styles from './AccountNav.module.scss';

const cx = classNames.bind(styles);

export const SubNav = ({ className }) => (
  <div className={cx('section', className)}>
    <div className={cx('section-link-container')}>
      <NavLink
        to={`${RouteList.dashboard}/give`}
        className={cx('link-item', 'link-item--a')}
        activeClassName={cx('selected')}
      >
        give help
      </NavLink>
    </div>
    <div className={cx('section-link-container')}>
      <NavLink
        to={`${RouteList.dashboard}/get`}
        className={cx('link-item', 'link-item--a')}
        activeClassName={cx('selected')}
      >
        get help
      </NavLink>
    </div>
  </div>
);

const DashboardNav = () => {
  const query = useSearchParams();
  const qEmail = query?.get('email');
  const sEmail = window.localStorage.getItem('email');
  const [user] = useUser(qEmail || sEmail);

  return (
    <>
      <div className={cx('root', 'root--dashboard')}>
        <SubNav className={cx('section--1')} />
        <div className={cx('section', 'section--2')}>
          <div className={cx('user-link', 'help')}>
            <Link
              to={{
                pathname: RouteList.help,
                search: `?from=${RouteList.dashboard}`,
              }}
            >
              <HelpIcon />
            </Link>
          </div>
          <div className={cx('user-link', 'avatar')}>
            <Link to={RouteList.profile}>
              <Avatar src={user?.image} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
