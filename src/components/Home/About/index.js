import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';
import Markdown from 'components/Markdown';
import { RouteList } from 'lib/routes';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

const About = () => {
  const [content] = useSpreadsheet(CMS_URL['Home: About']);
  const AboutContent = pivotTable(content);

  return (
    <ContentBox
      className={cx('about-content-box')}
      childClassName={cx('about-content-box-child')}
    >
      <article className={cx('root')}>
        <section className={cx('section--1')}>
          <div className={cx('about-us')}>
            <Markdown source={AboutContent['Main']} />
          </div>
        </section>
        <section className={cx('section--2')}>
          <div className={cx('about-you')}>
            <h3 className={cx('about-you__heading')}>
              {AboutContent['Client Heading']}
            </h3>
            <div className={cx('about-you__body')}>
              <Markdown source={AboutContent['Client Body']} />
            </div>
          </div>
          <div className={cx('about-you')}>
            <h3 className={cx('about-you__heading')}>
              {AboutContent['Advisor Heading']}
            </h3>
            <div className={cx('about-you__body')}>
              <Markdown source={AboutContent['Advisor Body']} />
            </div>
            <div className={cx('footer')}>
              You can learn more in the{' '}
              <Link className={cx('footer-link')} to={RouteList.faq}>
                FAQ
              </Link>
            </div>
          </div>
        </section>
      </article>
    </ContentBox>
  );
};

export default About;
