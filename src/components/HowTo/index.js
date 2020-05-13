import React from 'react';
import classNames from 'classnames/bind';

import { useHistory } from 'react-router-dom';

import ContentBox from 'components/layout/ContentBox';
import Markdown from 'components/Markdown';
import TwoUp from 'components/TwoUp';
import { RouteList } from 'lib/routes';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './HowTo.module.scss';

const cx = classNames.bind(styles);

const HowTo = () => {
  const seenHowTo = window.localStorage.getItem('seenHowTo');
  const history = useHistory();
  const [content] = useSpreadsheet(CMS_URL['Guidelines']);
  const query = useSearchParams();
  const queryFrom = query?.get('from');

  const nextRoute = queryFrom || RouteList.dashboard;

  if (!content) {
    return null;
  }

  const subContents = content.filter((entry) => {
    return entry['Section'] === 'Sub-section';
  });

  const guidelines = content.filter((entry) => {
    return entry['Section'] === 'Guidelines';
  });

  const important = content.filter((entry) => {
    return entry['Section'] === 'Important';
  });

  const handleContinue = () => {
    window.localStorage.setItem('seenHowTo', true);
    history.push(nextRoute);
  };

  return (
    <ContentBox
      childClassName={cx('how-to-content-box-child')}
      theme="gray"
      isTop
    >
      <article className={cx('root')}>
        <div className={cx('inner')}>
          <h1 className={cx('title')}>Here's how helpspace works</h1>
          <div className={cx('section', 'section-right')}>
            <div>
              {subContents.map(({ Heading: heading, Body: body }) => (
                <div key={heading} className={cx('block')}>
                  <TwoUp
                    className={cx('how-two-up')}
                    slot1={<h3 className={cx('heading')}>{heading}</h3>}
                    slot2={
                      <div className={cx('body')}>
                        <Markdown source={body} />
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={cx('section')}>
            <h3 className={cx('heading', 'guidelines-label')}>Guidelines</h3>
            <div>
              {guidelines.map(({ Heading: heading, Body: body }) => (
                <div key={heading} className={cx('block', 'hasBorder')}>
                  <TwoUp
                    className={cx('how-two-up')}
                    slot1={<h3 className={cx('heading')}>{heading}</h3>}
                    slot2={
                      <div className={cx('body')}>
                        <Markdown source={body} />
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={cx('section', 'section-right')}>
            <div>
              <div className={cx('block')}>
                {important.map(({ Heading: heading, Body: body }) => (
                  <div key={heading}>
                    <TwoUp
                      className={cx('how-two-up')}
                      slot1={<h3 className={cx('heading')}>{heading}</h3>}
                      slot2={
                        <div className={cx('body')}>
                          <Markdown source={body} />
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!seenHowTo && (
            <button onClick={handleContinue} className={cx('cta')}>
              Accept and continue
            </button>
          )}
        </div>
      </article>
    </ContentBox>
  );
};

export default HowTo;
