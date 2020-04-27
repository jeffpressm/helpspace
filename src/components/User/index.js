import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import styles from './User.module.scss';
import classNames from 'classnames/bind';

import helpspaceAvatar from 'assets/icons/helpspace-avatar.png';
import Avatar from 'components/Avatar';
import ContentBox from 'components/layout/ContentBox';
import HelpLink from 'components/HelpLink';
import HowTo from 'components/HowTo';
import Tile from 'components/Tile';

const cx = classNames.bind(styles);

const User = () => {
  const [showHowTo, setShowHowTo] = useState(false);
  const { search } = useLocation();
  const { responses } = useContext(SpreadsheetContext);
  const query = new URLSearchParams(search);
  const email = query.get('email');
  const { image, clientResponses } = getUserInfo(responses, email);

  useEffect(() => {
    const shouldShowHowTo = !localStorage.getItem('seenHowTo');
    if (shouldShowHowTo) {
      setShowHowTo(true);
    }
  }, []);

  if (showHowTo) {
    return <HowTo onClose={() => setShowHowTo(false)} type="client" />;
  }

  return (
    <ContentBox isTop>
      <article className={cx('root')}>
        <div className={cx('help-container')}>
          <HelpLink onClick={() => setShowHowTo(true)} />
        </div>
        {clientResponses.map((response) => (
          <section key={response['Doc Url']} className={cx('item')}>
            <h2 className={cx('title')}>{response['Challenge']}</h2>
            <Tile
              href={response['Doc Url']}
              target="_blank"
              rel="noopener noreferrer"
              title="Start here: Introduction and background"
            />
            <div className={cx('footer')}>
              <div className={cx('footer__left')}>
                <ul className={cx('avatars')}>
                  <li className={cx('avatar__item')}>
                    <img src={helpspaceAvatar} alt="Helpspace avatar" />
                  </li>
                  <li className={cx('avatar__item')}>
                    <Avatar src={image} />
                  </li>
                </ul>
                <p>Shared with you and Helpspace</p>
              </div>
            </div>
          </section>
        ))}
      </article>
    </ContentBox>
  );
};

export default User;
