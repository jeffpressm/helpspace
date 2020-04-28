import React, { useContext } from 'react';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import styles from './HowTo.module.scss';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';
import TwoUp from 'components/TwoUp';
import Expandable from 'components/Expandable';
import { pivotTable } from 'utils/pivotTable';

const cx = classNames.bind(styles);

const HowTo = ({ onClose, type }) => {
  const { content } = useContext(SpreadsheetContext);
  const clientGuidelines = content['Guidelines'];
  const expertGuidelines = content['Expert Guidelines'];
  const FooterContent = pivotTable(content['Footer']);
  const hasCookie = window.localStorage.getItem('seenHowTo', true) === 'true';

  const pageContent = type === 'client' ? clientGuidelines : expertGuidelines;

  const subContents = pageContent.filter((entry) => {
    return entry['Section'] === 'Sub-section';
  });

  const guidelines = pageContent.filter((entry) => {
    return entry['Section'] === 'Guidelines';
  });

  const handleContinue = () => {
    window.localStorage.setItem('seenHowTo', true);
    onClose();
  };

  return (
    <ContentBox theme="gray" isTop>
      <article className={cx('root')}>
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
              <button className={cx('close-button')} onClick={() => onClose()}>
                Close
              </button>
            </div>
          )}
        </div>
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
          <Expandable title="General Guidelines">
            <div className={cx('section')}>
              <div>
                {guidelines.map(({ Heading: heading, Body: body }) => (
                  <div key={heading} className={cx('block')}>
                    <TwoUp
                      slot1={<h3 className={cx('heading')}>{heading}</h3>}
                      slot2={<div className={cx('body')}>{body}</div>}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Expandable>
          <Expandable title="Important to remember">
            <div className={cx('section')}>
              <div>
                <div className={cx('block')}>
                  <TwoUp
                    slot1={
                      <h3 className={cx('heading')}>
                        <div></div>
                      </h3>
                    }
                    slot2={
                      <div className={cx('body')}>
                        <p>
                          You agree to keep any private information exchanged on
                          helpspace confidential. If you have any questions
                          about confidentiality, raise them when you start your
                          exchange.
                        </p>
                        <p>
                          Don’t use helpspace to provide or receive legal or
                          investing advice.
                        </p>
                        <p>
                          Don’t break the law using helpspace. All information
                          exchanged in this workspace is subject to our{' '}
                          <a
                            href={FooterContent['Privacy Policy']}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a
                            href={FooterContent['User Agreement']}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            User Agreement.
                          </a>
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </Expandable>
          {!hasCookie && (
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
