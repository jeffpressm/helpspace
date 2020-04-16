import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import styles from './User.module.scss';
import classNames from 'classnames/bind';
import Tile from 'components/Tile';
import helpspaceAvatar from 'assets/icons/helpspace-avatar.png';
import Avatar from 'components/Avatar';

const cx = classNames.bind(styles);

const User = () => {
  const { search } = useLocation();
  const { responses } = useContext(SpreadsheetContext);
  const query = new URLSearchParams(search);
  const email = query.get('email');
  const { clientResponses, name } = getUserInfo(responses, email);

  return (
    <article className={cx('root')}>
      {clientResponses.map((response) => (
        <section className={cx('item')}>
          <h2 className={cx('title')}>{response['Challenge']}</h2>
          <Tile
            url={response['Doc Url']}
            title="Start here: Introduction and background"
          />
          <div className={cx('footer')}>
            <div className={cx('footer__left')}>
              <ul className={cx('avatars')}>
                <li className={cx('avatar__item')}>
                  <img src={helpspaceAvatar} alt="Helpspace avatar" />
                </li>
                <li className={cx('avatar__item')}>
                  <Avatar name={name} />
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
