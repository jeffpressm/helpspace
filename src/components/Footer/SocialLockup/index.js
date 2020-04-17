import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as AtIcon } from 'assets/icons/at.svg';

import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';

import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';

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
            <LinkedInIcon className={cx('icon')} />
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
            <InstagramIcon className={cx('icon')} />
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
            <TwitterIcon className={cx('icon')} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialLockup;
