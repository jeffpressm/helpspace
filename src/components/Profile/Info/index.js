import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';

import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function getLinkedInName(url) {
  const regex = /(?:(?:http(?:s)?:\/\/)?(?:www\.)?)?linkedin\.com\/(?:in|company)\/(.*)\//;

  if (url.match(regex)) {
    return url.match(regex)[1];
  }

  return null;
}

const ProfileInfo = ({ user }) => {
  const linkedInName = getLinkedInName(user.linkedIn);

  return (
    <dl className={cx('root')}>
      <div className={cx('section')}>
        <dt className={cx('title')}>About</dt>
        <dd className={cx('body')}>
          {user.role}, {user.industry}
        </dd>
      </div>
      <div className={cx('section')}>
        <dt className={cx('title')}>Location</dt>
        <dd className={cx('body')}>{user.location}</dd>
      </div>
      {linkedInName && (
        <div className={cx('section')}>
          <dt className={cx('title')}>LinkedIn</dt>
          <dd className={cx('body')}>
            <a className={cx('link')} href={user.linkedIn}>
              <span className={cx('li-icon')}>
                <LinkedInIcon />
              </span>
              {getLinkedInName(user.linkedIn)}
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
};

export default ProfileInfo;
