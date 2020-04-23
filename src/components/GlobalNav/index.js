import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { RouteList } from 'lib/routes';
import { FormContext, openForm } from 'utils/context/Form';

import styles from './GlobalNav.module.scss';

const cx = classNames.bind(styles);

const GlobalNavLinks = ({ links }) => (
  <ul className={cx('linkList')}>
    {links.map(({ to, onClick, label }) => {
      if (to) {
        return (
          <li key={label} className={cx('linkItem')}>
            <NavLink
              className={cx('link')}
              activeClassName={cx('selected')}
              to={to}
            >
              {label}
            </NavLink>
          </li>
        );
      }
      if (onClick) {
        return (
          <li key={label} className={cx('linkItem')}>
            <button className={cx('link')} onClick={onClick}>
              {label}
            </button>
          </li>
        );
      }
      return null;
    })}
  </ul>
);

const GlobalNav = ({ theme, mode }) => {
  const { getRef, giveRef } = useContext(FormContext);

  const links = {
    standard: [
      {
        to: RouteList.faq,
        label: 'FAQ',
      },
      {
        to: RouteList.login,
        label: 'Login',
      },
    ],
    dashboard: [
      {
        onClick: () => {
          openForm(getRef);
        },
        label: 'Give',
      },
      {
        onClick: () => {
          openForm(giveRef);
        },
        label: 'Get',
      },
    ],
  };

  return (
    <div className={cx('root', [theme])}>
      <div className={cx('logoContainer')}>
        <Link to="/">
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
