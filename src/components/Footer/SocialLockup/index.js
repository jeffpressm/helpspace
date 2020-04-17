import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as AtIcon } from 'assets/icons/at.svg';

import styles from './SocialLockup.module.scss';

const cx = classNames.bind(styles);

const SocialLockup = ({ email, linkedin, instagram, twitter }) => {
  return (
    <ul className={cx('root')}>
      {email && (
        <li className={cx('item')}>
          <a
            className={cx('link')}
            href={email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AtIcon className={cx('icon')} />
          </a>
        </li>
      )}
      {linkedin && (
        <li className={cx('item')}>
          <a
            className={cx('link')}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LI
          </a>
        </li>
      )}
      {instagram && (
        <li className={cx('item')}>
          <a
            className={cx('link')}
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            IG
          </a>
        </li>
      )}
      {twitter && (
        <li className={cx('item')}>
          <a
            className={cx('link')}
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            TW
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialLockup;
