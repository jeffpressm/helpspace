import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { RouteList } from 'lib/routes';

import styles from './ContentNav.module.scss';

const cx = classNames.bind(styles);

const ContentNav = () => {
  const links = [
    {
      to: RouteList.faq,
      label: 'FAQ',
    },
    {
      to: RouteList.login,
      label: 'Login',
    },
  ];
  return (
    <ul className={cx('link-list')}>
      {links.map(({ to, label }) => (
        <li key={label} className={cx('link-item')}>
          <NavLink
            className={cx('link')}
            activeClassName={cx('selected')}
            to={to}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ContentNav;
