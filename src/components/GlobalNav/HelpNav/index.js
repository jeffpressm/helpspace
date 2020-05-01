import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HelpNav.module.scss';

const cx = classNames.bind(styles);

const HelpNav = () => {
  const seenHowTo = window.localStorage.getItem('seenHowTo');
  const history = useHistory();
  return (
    <div className={cx('root')}>
      <div className={cx('section', 'section--1')}>
        <div className={cx('copy')}>
          For help at any time,{' '}
          <a
            className={cx('support__link')}
            href="mailto:support@helpspace.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            support@helpspace.co
          </a>
        </div>
      </div>

      {seenHowTo && (
        <div className={cx('section', 'section--2')}>
          <button className={cx('close')} onClick={() => history.goBack()}>
            <span className={cx('close-icon')}>×</span>{' '}
            <span className={cx('close-text')}>Close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HelpNav;
