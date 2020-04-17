import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { RouteList } from 'lib/routes';

import styles from './GlobalNav.module.scss';

const cx = classNames.bind(styles);

const GlobalNavLinks = ({ links }) => (
  <ul className={cx('linkList')}>
    {links.map(({ to, label, target }) => (
      <li key={to} className={cx('linkItem')}>
        <NavLink
          className={cx('link')}
          activeClassName={cx('selected')}
          to={to}
          target={target}
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

const GlobalNav = ({ theme, mode, target }) => {
  const links = {
    standard: [
      {
        to: RouteList.faq,
        label: 'FAQ',
        target: target,
      },
      {
        to: RouteList.login,
        label: 'Login',
        target: target,
      },
    ],
    dashboard: [
      {
        to: RouteList.give,
        label: 'Give',
        target: target,
      },
      {
        to: RouteList.get,
        label: 'Get',
        target: target,
      },
    ],
  };

  return (
    <div className={cx('root', [theme])}>
      <div className={cx('logoContainer')}>
        <Link to="/" target={target}>
          <Logo />
        </Link>
      </div>
      <div className={cx('linkContainer', [mode])}>
        <GlobalNavLinks links={links[mode]} />
      </div>
    </div>
  );
};

export default GlobalNav;
