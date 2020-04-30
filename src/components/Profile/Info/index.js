import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function getLinkedInName(url) {
  const regex = /(?:(?:http(?:s)?:\/\/)?(?:www\.)?)?linkedin\.com\/in\/(.*)\//;

  return url.match(regex)[1];
}

const ProfileInfo = () => {
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const email = query?.get('email');
  const { industry, linkedIn, location, role } = getUserInfo(responses, email);

  return (
    <dl className={cx('root')}>
      <div className={cx('section')}>
        <dt className={cx('title')}>About</dt>
        <dd className={cx('body')}>
          {role}, {industry}
        </dd>
      </div>
      <div className={cx('section')}>
        <dt className={cx('title')}>Location</dt>
        <dd className={cx('body')}>{location}</dd>
      </div>
      {linkedIn && (
        <div className={cx('section')}>
          <dt className={cx('title')}>LinkedIn</dt>
          <dd className={cx('body')}>
            <a className={cx('link')} href={linkedIn}>
              <span className={cx('li-icon')}>
                <LinkedInIcon />
              </span>
              {getLinkedInName(linkedIn)}
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
};

export default ProfileInfo;
