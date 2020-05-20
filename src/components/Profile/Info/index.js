import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import ExternalLink from 'components/ExternalLink';

import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function getLinkedInName(url) {
  if (!url) {
    return null;
  }

  const regex = /(?:(?:http(?:s)?:\/\/)?(?:www\.)?)?linkedin\.com\/(?:in|company)\/(.*)\//;

  if (url.match(regex)) {
    return url.match(regex)[1];
  }

  return null;
}

const ProfileInfo = ({ user }) => {
  const linkedInName = getLinkedInName(user?.linkedIn);

  return (
    <dl className={cx('root')}>
      <div className={cx('section')}>
        <dt className={cx('title')}>About</dt>
        <dd className={cx('body')}>
          {user?.role}, {user?.industry}
        </dd>
      </div>
      <div className={cx('section')}>
        <dt className={cx('title')}>Location</dt>
        <dd className={cx('body')}>{user?.location}</dd>
      </div>
      {linkedInName && (
        <div className={cx('section')}>
          <dt className={cx('title')}>LinkedIn</dt>
          <dd className={cx('body')}>
            <ExternalLink className={cx('link')} href={user?.linkedIn}>
              <span className={cx('li-icon')}>
                <LinkedInIcon />
              </span>
              {linkedInName}
            </ExternalLink>
          </dd>
        </div>
      )}
    </dl>
  );
};

export default ProfileInfo;
