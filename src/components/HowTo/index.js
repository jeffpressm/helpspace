import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { useHistory } from 'react-router-dom';

import ContentBox from 'components/layout/ContentBox';
import Markdown from 'components/Markdown';
import TwoUp from 'components/TwoUp';
import { RouteList } from 'lib/routes';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './HowTo.module.scss';

const cx = classNames.bind(styles);

const HowTo = ({ onClose }) => {
  const seenHowTo = window.localStorage.getItem('seenHowTo');
  const history = useHistory();
  const { content } = useContext(SpreadsheetContext);
  const GuidelinesContent = content['Guidelines'];
  const query = useSearchParams();
  const queryEmail = query?.get('email');

  if (!GuidelinesContent) {
    return null;
  }

  const subContents = GuidelinesContent.filter((entry) => {
    return entry['Section'] === 'Sub-section';
  });

  const guidelines = GuidelinesContent.filter((entry) => {
    return entry['Section'] === 'Guidelines';
  });

  const important = GuidelinesContent.filter((entry) => {
    return entry['Section'] === 'Important';
  });

  const handleContinue = () => {
    window.localStorage.setItem('seenHowTo', true);

    if (onClose) {
      onClose();
    } else {
      let nextRoute = RouteList.profile;
      if (queryEmail) {
        nextRoute += `?email=${queryEmail}`;
      }
      history.push(nextRoute);
    }
  };

  return (
    <ContentBox theme="gray" isTop>
      <article className={cx('root')}>
        <div className={cx('inner')}>
          <h1 className={cx('title')}>Here's how helpspace works</h1>
          <div className={cx('section')}>
            <div>
              {subContents.map(({ Heading: heading, Body: body }) => (
                <div key={heading} className={cx('block')}>
                  <TwoUp
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
            <div>
              <div className={cx('block')}>
                {important.map(({ Heading: heading, Body: body }) => (
                  <div key={heading} className={cx('block')}>
                    <TwoUp
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
