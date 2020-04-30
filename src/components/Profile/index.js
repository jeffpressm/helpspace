import React from 'react';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';

import ProfileExpertise from './Expertise';
import ProfileHeader from './Header';
import ProfileInfo from './Info';
import ProfileSocial from './Social';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <ContentBox theme="red" isTop>
      <article className={cx('root')}>
        <header className={cx('header')}>
          <ProfileHeader />
          <div className={cx('info-container')}>
            <ProfileInfo />
          </div>
        </header>
        <section className={cx('section')}>
          <ProfileExpertise />
        </section>
        <section className={cx('section')}>
          <ProfileSocial />
        </section>
      </article>
    </ContentBox>
  );
};

export default Profile;
