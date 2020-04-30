import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import Avatar from 'components/Avatar';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const ProfileHeader = () => {
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const email = query?.get('email');
  const { name, image } = getUserInfo(responses, email);

  return (
    <div className={cx('root')}>
      <div className={cx('heading')}>
        <h1>{name}</h1>
      </div>
      <div className={cx('avatar')}>
        <Avatar src={image} />
      </div>
    </div>
  );
};

export default ProfileHeader;
