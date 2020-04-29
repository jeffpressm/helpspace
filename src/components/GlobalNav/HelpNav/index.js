import React from 'react';
import classNames from 'classnames/bind';

import styles from './HelpNav.module.scss';

const cx = classNames.bind(styles);

const DashboardNav = () => {
  return (
    <div className={cx('root')}>
      <div className={cx('section', 'section--1')}>
        <p className={cx('copy')}>
          For assistance at any time, contact{' '}
          <a
            className={cx('support__link')}
            href="mailto:support@helpspace.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            support@helpspace.co
          </a>
        </p>
      </div>
    </div>
  );
};

export default DashboardNav;
