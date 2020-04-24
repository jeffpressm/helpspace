import React, { useEffect, useContext, useState } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import ContentBox from 'components/layout/ContentBox';
import { FormContext, openForm } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import Card from './Card';
import styles from './Help.module.scss';

const cx = classNames.bind(styles);

function formatContent(raw) {
  const sections = {};
  raw.forEach((item) => {
    const key = item['Section'];
    if (!sections[key]) {
      sections[key] = [];
    }
    sections[key].push(item['Body']);
  });

  const title = sections['Title'][0];
  delete sections['Title'];

  return {
    title,
    sections,
  };
}

const Help = () => {
  const [activeSection, setActiveSection] = useState();
  const [ChallengesContent, setChallengesContent] = useState();
  const { getRef, giveRef } = useContext(FormContext);
  const { content } = useContext(SpreadsheetContext);

  useEffect(() => {
    setChallengesContent(formatContent(content['Challenges']));
  }, [setChallengesContent, content]);

  useEffect(() => {
    if (!ChallengesContent?.sections) {
      return;
    }
    setActiveSection(Object.keys(ChallengesContent.sections)[0]);
  }, [setActiveSection, ChallengesContent]);

  if (!ChallengesContent) {
    return null;
  }

  return (
    <ContentBox theme="gray">
      <article>
        <h2 className={cx('headline')}>{ChallengesContent.title}</h2>
        <nav>
          <ul className={cx('toc')}>
            {Object.keys(ChallengesContent.sections).map((k) => (
              <li
                className={cx('toc-item', { active: k === activeSection })}
                key={k}
              >
                <a
                  href={`#${k}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(k);
                  }}
                >
                  {k}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={cx('section-container')}>
          {Object.entries(ChallengesContent.sections).map((e) => (
            <section
              className={cx('section', { active: e[0] === activeSection })}
              key={e[0]}
              id={e[0]}
            >
              {e[1].map((c) => (
                <Card key={c} title={c} />
              ))}
            </section>
          ))}
        </div>
        <footer className={cx('cta-container')}>
          <ul className={cx('ctas')}>
            <li className={cx('cta')}>
              <button onClick={() => openForm(getRef)}>
                Get help
                <span className={cx('arrow')}>
                  <ArrowIcon />
                </span>
              </button>
            </li>
            <li className={cx('cta')}>
              <button onClick={() => openForm(giveRef)}>
                Give help
                <span className={cx('arrow')}>
                  <ArrowIcon />
                </span>
              </button>
            </li>
          </ul>
        </footer>
      </article>
    </ContentBox>
  );
};

export default Help;
