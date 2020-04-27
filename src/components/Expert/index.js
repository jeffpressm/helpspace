import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import useClipboard from 'react-use-clipboard';

import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import Avatar from 'components/Avatar';
import ContentBox from 'components/layout/ContentBox';
import HowTo from 'components/HowTo';
import HelpLink from 'components/HelpLink';
import { FormContext, openForm } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';

import styles from './Expert.module.scss';

const cx = classNames.bind(styles);

const getChallenges = (responses) =>
  responses.reduce((acc, val) => {
    const list = val['Challenges'].split(', ');
    acc.push(...list);
    return acc;
  }, []);

const getCategories = (responses) =>
  responses.reduce((acc, val) => {
    const list = val['Categories'].split(', ');
    acc.push(...list);
    return acc;
  }, []);
const Expert = () => {
  const [showHowTo, setShowHowTo] = useState(false);
  const { search } = useLocation();
  const { giveRef } = useContext(FormContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = new URLSearchParams(search);
  const email = query.get('email');
  const { expertResponses, name, role, location, image } = getUserInfo(
    responses,
    email
  );
  const challengeList = getChallenges(expertResponses);
  const shareString = `I’m using helpspace.co to help small businesses with ${getCategories(
    expertResponses
  )
    .slice(0, 3)
    .join(', ')}.`;

  const [isCopied, setCopied] = useClipboard(shareString);

  useEffect(() => {
    const shouldShowHowTo = !localStorage.getItem('seenHowTo');
    if (shouldShowHowTo) {
      setShowHowTo(true);
    }
  }, []);

  if (showHowTo) {
    return <HowTo onClose={() => setShowHowTo(false)} type="expert" />;
  }

  return (
    <ContentBox theme="red" isTop>
      <article className={cx('inner')}>
        <div className={cx('help-container')}>
          <HelpLink onClick={() => setShowHowTo(true)} />
        </div>
        <header className={cx('header')}>
          <div>
            <h1 className={cx('title')}>{name}</h1>
            <p className={cx('subtitle')}>
              {role} from {location}
            </p>
          </div>
          <div className={cx('avatar')}>
            <Avatar src={image} />
          </div>
        </header>
        <section>
          <h2 className={cx('heading')}>
            Ready and willing to help with these challenges
          </h2>
          <ul className={cx('challenges')}>
            {challengeList.map((challenge) => (
              <li key={challenge} className={cx('challenges__item')}>
                {challenge}
              </li>
            ))}
            <li>
              <button
                className={cx('challenges__add')}
                onClick={() => openForm(giveRef)}
              >
                +
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2 className={cx('heading')}>
            Let your community know you’re ready to help
          </h2>
          <p className={cx('quote')}>{shareString}</p>
          <ul className={cx('share')}>
            <li>
              <a
                className={cx('share__button')}
                href={`https://www.linkedin.com/shareArticle?mini=true&title=Helpspace&summary=${encodeURIComponent(
                  shareString
                )}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={cx('share__icon')}>
                  <LinkedInIcon />
                </div>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={cx('share__button')}
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(shareString)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={cx('share__icon')}>
                  <TwitterIcon />
                </div>
                Twitter
              </a>
            </li>
            <li>
              <a
                className={cx('share__button')}
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={cx('share__icon')}>
                  <FacebookIcon />
                </div>
                Facebook
              </a>
            </li>
            <li>
              <button className={cx('share__button')} onClick={setCopied}>
                <div className={cx('share__icon')}>
                  <CopyIcon />
                </div>
                {isCopied ? 'Copied!' : 'Copy text'}
              </button>
            </li>
          </ul>
        </section>
      </article>
    </ContentBox>
  );
};

export default Expert;
