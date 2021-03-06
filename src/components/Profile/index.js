import React from 'react';
import classNames from 'classnames/bind';

import { SubNav } from 'components/GlobalNav/AccountNav/Profile';
import ContentBox from 'components/layout/ContentBox';
import useSearchParams from 'utils/hooks/useSearchParams';
import useUser from 'utils/hooks/useUser';

import ProfileExpertise from './Expertise';
import ProfileHeader from './Header';
import ProfileInfo from './Info';
import ProfileSocial from './Social';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const Profile = () => {
  const query = useSearchParams();
  const qEmail = query?.get('email');
  const sEmail = window.localStorage.getItem('email');
  const [user] = useUser(qEmail || sEmail);

  if (!user) {
    return null;
  }

  return (
    <ContentBox
      className={cx('content-box-profile')}
      childClassName={cx('content-box-profile-child')}
      theme="red"
      isTop
    >
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
