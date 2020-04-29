import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';
import Markdown from 'components/Markdown';
import TwoUp from 'components/TwoUp';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './HowTo.module.scss';

const cx = classNames.bind(styles);

const HowTo = ({ onClose, type }) => {
  const [guidelinesContent, setGuidelinesContent] = useState();
  const query = useSearchParams();
  const { content } = useContext(SpreadsheetContext);
  const clientGuidelines = content['Guidelines: Client'];
  const advisorGuidelines = content['Guidelines: Advisor'];
  const hasCookie = window.localStorage.getItem('seenHowTo', true) === 'true';

  useEffect(() => {
    let newType;

    if (type) {
      newType = type;
    } else if (query) {
      newType = query.get('as');
    }

    if (!newType) {
      return;
    }

    const newGuidelines =
      newType === 'client' ? clientGuidelines : advisorGuidelines;

    setGuidelinesContent(newGuidelines);
  }, [query, type, advisorGuidelines, clientGuidelines]);

  if (!guidelinesContent) {
    return null;
  }

  const subContents = guidelinesContent.filter((entry) => {
    return entry['Section'] === 'Sub-section';
  });

  const guidelines = guidelinesContent.filter((entry) => {
    return entry['Section'] === 'Guidelines';
  });

  const important = guidelinesContent.filter((entry) => {
    return entry['Section'] === 'Important';
  });

  const handleContinue = () => {
    window.localStorage.setItem('seenHowTo', true);
    onClose();
  };

  return (
    <ContentBox theme="gray" isTop>
      <article className={cx('root')}>
        {type && (
          <div className={cx('support')}>
            <div className={cx('support__body')}>
              For assistance at any time, contact{' '}
              <a
                className={cx('support__link')}
                href="mailto:support@helpspace.co"
              >
                support@helpspace.co
              </a>
            </div>
            {hasCookie && (
              <div className={cx('support__close')}>
                <button
                  className={cx('close-button')}
                  onClick={() => onClose()}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}
        <div className={cx('inner')}>
          <h1 className={cx('title')}>Here's how helpspace works</h1>
          <div className={cx('section')}>
            <div>
              {subContents.map(({ Heading: heading, Body: body }) => (
                <div key={heading} className={cx('block')}>
                  <TwoUp
                    slot1={<h3 className={cx('heading')}>{heading}</h3>}
                    slot2={<div className={cx('body')}>{body}</div>}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={cx('section')}>
            <div>
              {guidelines.map(({ Heading: heading, Body: body }) => (
                <div key={heading} className={cx('block', 'hasBorder')}>
                  <TwoUp
                    slot1={<h3 className={cx('heading')}>{heading}</h3>}
                    slot2={<div className={cx('body')}>{body}</div>}
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
          <button onClick={handleContinue} className={cx('cta')}>
            Accept and continue
          </button>
        </div>
      </article>
    </ContentBox>
  );
};

export default HowTo;
