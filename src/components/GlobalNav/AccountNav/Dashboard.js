import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';
import Avatar from 'components/Avatar';
import { RouteList } from 'lib/routes';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './AccountNav.module.scss';

const cx = classNames.bind(styles);

const DashboardNav = () => {
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const email = query?.get('email');
  const { image } = getUserInfo(responses, email);

  return (
    <div className={cx('root')}>
      <div className={cx('section', 'section--1')}>
        <div className={cx('section-link')}>
          <NavLink
            to={`${RouteList.dashboard}/give`}
            activeClassName={cx('selected')}
          >
            give help
          </NavLink>
        </div>
        <div className={cx('section-link')}>
          <NavLink
            to={`${RouteList.dashboard}/get`}
            activeClassName={cx('selected')}
          >
            get help
          </NavLink>
        </div>
      </div>
      <div className={cx('section', 'section--2')}>
        <div className={cx('user-link', 'help')}>
          <Link to={RouteList.help}>
            <HelpIcon />
          </Link>
        </div>
        <div className={cx('user-link', 'avatar')}>
          <Link to={RouteList.profile}>
            <Avatar src={image} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
