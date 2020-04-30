import React, { useContext, useEffect, useState } from 'react';
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

const HowTo = ({ onClose, as }) => {
  const history = useHistory();
  const [guidelinesContent, setGuidelinesContent] = useState();
  const { content } = useContext(SpreadsheetContext);
  const clientGuidelines = content['Guidelines: Client'];
  const advisorGuidelines = content['Guidelines: Advisor'];
  const query = useSearchParams();
  const userEmail = query?.get('email');
  const storageEmail = window.localStorage.getItem('email');

  useEffect(() => {
    const newGuidelines =
      as === 'client' ? clientGuidelines : advisorGuidelines;

    setGuidelinesContent(newGuidelines);
  }, [as, advisorGuidelines, clientGuidelines]);

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

    if (onClose) {
      onClose();
    } else {
      history.push(`${RouteList.profile}?email=${userEmail || storageEmail}`);
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
                    slot2={<div className={cx('body')}>{body}</div>}
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
