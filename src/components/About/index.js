import React, { useEffect, useContext, useState } from 'react';
import classNames from 'classnames/bind';

import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import Card from './Card';
import styles from './About.module.scss';

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

const About = () => {
  const [activeSection, setActiveSection] = useState();
  const [ChallengesContent, setChallengesContent] = useState();
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
    <article className={cx('root')}>
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
    </article>
  );
};

export default About;
