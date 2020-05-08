import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as AtIcon } from 'assets/icons/at.svg';

import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';

import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import ExternalLink from 'components/ExternalLink';

import styles from './SocialLockup.module.scss';

const cx = classNames.bind(styles);

const SocialLockup = ({ email, linkedin, instagram, twitter }) => {
  return (
    <ul className={cx('root')}>
      {email && (
        <li className={cx('item')}>
          <ExternalLink className={cx('link')} href={email}>
            <AtIcon className={cx('icon')} />
          </ExternalLink>
        </li>
      )}
      {linkedin && (
        <li className={cx('item')}>
          <ExternalLink className={cx('link')} href={linkedin}>
            <LinkedInIcon className={cx('icon')} />
          </ExternalLink>
        </li>
      )}
      {instagram && (
        <li className={cx('item')}>
          <ExternalLink className={cx('link')} href={instagram}>
            <InstagramIcon className={cx('icon')} />
          </ExternalLink>
        </li>
      )}
      {twitter && (
        <li className={cx('item')}>
          <ExternalLink className={cx('link')} href={twitter}>
            <TwitterIcon className={cx('icon')} />
          </ExternalLink>
        </li>
      )}
    </ul>
  );
};

export default SocialLockup;
