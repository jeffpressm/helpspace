import React from 'react';
import classNames from 'classnames/bind';

import GlobalNav from '../GlobalNav';

import styles from './GlobalContainer.module.scss';

const cx = classNames.bind(styles);

const GlobalContainer = ({ children }) => {
  // TODO change theme based on route
  return (
    <div className={cx('root')}>
      <header className={cx('header')}>
        <GlobalNav theme="red" />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default GlobalContainer;
