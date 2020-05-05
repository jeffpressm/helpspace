import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { SubNav } from 'components/GlobalNav/AccountNav/Profile';
import ContentBox from 'components/layout/ContentBox';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import ProfileExpertise from './Expertise';
import ProfileHeader from './Header';
import ProfileInfo from './Info';
import ProfileSocial from './Social';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const Profile = () => {
  const [user, setUser] = useState();
  const userData = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const qEmail = query?.get('email');

  useEffect(() => {
    if (qEmail) {
      setUser(getUserInfo(responses, qEmail));
      return;
    }

    setUser(userData);
  }, [qEmail, responses, setUser, userData]);

  if (!user) {
    return null;
  }

  return (
    <ContentBox theme="red" isTop>
      <nav className={cx('nav')}>
        <SubNav />
      </nav>
      <article className={cx('root')}>
        <header className={cx('header')}>
          <ProfileHeader user={user} />
          <div className={cx('info-container')}>
            <ProfileInfo user={user} />
          </div>
        </header>
        <section className={cx('section')}>
          <ProfileExpertise user={user} />
        </section>
        <section className={cx('section')}>
          <ProfileSocial user={user} />
        </section>
      </article>
    </ContentBox>
  );
};

export default Profile;
