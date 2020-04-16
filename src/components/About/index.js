import React, { useContext } from 'react';
import classNames from 'classnames/bind';

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
  const { content } = useContext(SpreadsheetContext);
  const { Challenges } = content;
  const ChallengesContent = formatContent(Challenges);
  console.log(Object.entries(ChallengesContent.sections));
  return (
    <article>
      <h2>{ChallengesContent.title}</h2>
      <ul>
        {Object.keys(ChallengesContent.sections).map((k) => (
          <li key={k}>
            <a href={`#${k}`}>{k}</a>
          </li>
        ))}
      </ul>
      {Object.entries(ChallengesContent.sections).map((e) => (
        <section key={e[0]} id={e[0]}>
          {e[1].map((c) => (
            <div>{c}</div>
          ))}
        </section>
      ))}
    </article>
  );
};

export default About;
