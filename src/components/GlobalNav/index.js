import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { RouteList } from 'lib/routes';

import styles from './GlobalNav.module.scss';

const cx = classNames.bind(styles);

const GlobalNavLinks = ({ links }) => (
  <ul className={cx('linkList')}>
    {links.map(({ to, label }) => (
      <li key={to} className={cx('linkItem')}>
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

const GlobalNav = ({ theme }) => {
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
    <div className={cx('root', [theme])}>
      <div className={cx('logoContainer')}>
        <Link to="/">
          <span className={cx('logo')}>help supply</span>
        </Link>
      </div>
      <div className={cx('linkContainer')}>
        <GlobalNavLinks links={links} />
      </div>
    </div>
  );
};

export default GlobalNav;
