import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { RouteList } from 'lib/routes';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

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
              <div className={cx('challenge')} key={c}>
                <h3 className={cx('challenge-title')}>{c}</h3>
                <ul className={cx('challenge-ctas')}>
                  <li className={cx('challenge-cta')}>
                    <Link to={RouteList.get}>
                      Get help
                      <span className={cx('arrow')}>
                        <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                  <li className={cx('challenge-cta')}>
                    <Link to={RouteList.give}>
                      Give help
                      <span className={cx('arrow')}>
                        <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
};

export default About;
