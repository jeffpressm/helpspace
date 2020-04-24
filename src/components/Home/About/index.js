import React from 'react';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

const About = () => {
  return (
    <ContentBox>
      <article className={cx('root')}>
        <section className={cx('section--1')}>
          <div className={cx('about-us')}>
            <p>
              Helpspace connects small businesses with volunteer professionals
              whose expertise can help solve crisis-specific challenges.
            </p>
            <p>
              Once the match is made, you collaborate to solve the business
              challenge via shared Google Docs – your “helpspace”
            </p>
          </div>
        </section>
        <section className={cx('section--2')}>
          <div className={cx('about-you')}>
            <h3 className={cx('about-you__heading')}>As a client</h3>
            <div className={cx('about-you__body')}>
              <p>
                Choose a challenge from one’s we’ve seen before – or write your
                own. When you’re matched, use your helpspace to interact with
                your Advisor and ask any questions you have about their advice
                and feedback. Pay it forward by offering your own expertise as
                an Advisor.
              </p>
            </div>
          </div>
          <div className={cx('about-you')}>
            <h3 className={cx('about-you__heading')}>As an advisor</h3>
            <div className={cx('about-you__body')}>
              <p>
                You let helpspace know what challenges you’re qualified to help
                with. When you’re matched with a client, you’ll spend no more
                than 30 minutes giving help via a Google Doc workspace. And
                since we all need help sometimes, feel free to list yourself as
                a client too.
              </p>
            </div>
          </div>
        </section>
      </article>
    </ContentBox>
  );
};

export default About;
