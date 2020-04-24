import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';
import { pivotTable } from 'utils/pivotTable';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

const About = () => {
  const { content } = useContext(SpreadsheetContext);
  const { About } = content;
  const AboutContent = pivotTable(About);

  return (
    <ContentBox>
      <article className={cx('root')}>
        <section className={cx('section--1')}>
          <div className={cx('about-us')}>
            <ReactMarkdown source={AboutContent['Main']} />
          </div>
        </section>
        <section className={cx('section--2')}>
          <div className={cx('about-you')}>
            <h3 className={cx('about-you__heading')}>
              {AboutContent['Client Heading']}
            </h3>
            <div className={cx('about-you__body')}>
              <ReactMarkdown source={AboutContent['Client Body']} />
            </div>
          </div>
          <div className={cx('about-you')}>
            <h3 className={cx('about-you__heading')}>
              {AboutContent['Advisor Heading']}
            </h3>
            <div className={cx('about-you__body')}>
              <ReactMarkdown source={AboutContent['Advisor Body']} />
            </div>
          </div>
        </section>
      </article>
    </ContentBox>
  );
};

export default About;
