import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import styles from './User.module.scss';
import classNames from 'classnames/bind';
import Tile from 'components/Tile';
import HowTo from 'components/HowTo';
import helpspaceAvatar from 'assets/icons/helpspace-avatar.png';
import Avatar from 'components/Avatar';
import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';
import HelpLink from 'components/HelpLink';

const cx = classNames.bind(styles);

const User = () => {
  const [showHowTo, setShowHowTo] = useState(false);
  const { search } = useLocation();
  const { responses } = useContext(SpreadsheetContext);
  const query = new URLSearchParams(search);
  const email = query.get('email');
  const { clientResponses } = getUserInfo(responses, email);

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
    <article className={cx('root')}>
      <HelpLink onClick={() => setShowHowTo(true)} />
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
                  <Avatar />
                </li>
              </ul>
              <p>Shared with you and Helpspace</p>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
};

export default User;
