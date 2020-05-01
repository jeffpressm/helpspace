import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import Avatar from 'components/Avatar';
import ContentBox from 'components/layout/ContentBox';
import Tile from 'components/Tile';
import { FormContext, openForm } from 'utils/context/Form';

import { ReactComponent as NoMatchIcon } from './assets/no-match.svg';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const GetHelp = ({ user }) => {
  const { getRef } = useContext(FormContext);

  return (
    <ContentBox isTop>
      <article className={cx('root')}>
        <div className={cx('add-request-container')}>
          <button
            className={cx('add-request')}
            onClick={() => openForm(getRef)}
          >
            +
          </button>
        </div>
        <div className={cx('requests-container')}>
          {user.clientResponses.map((response) => (
            <section key={response['Doc Url']} className={cx('request')}>
              <h2 className={cx('title')}>{response['Challenge']}</h2>
              <div className={cx('detail')}>
                <Tile
                  href={response['Doc Url']}
                  label="Start here: Introduction and background"
                />
              </div>
              <div className={cx('footer')}>
                <ul className={cx('avatars')}>
                  <li className={cx('avatar-item')}>
                    <Avatar src={user.image} />
                  </li>
                  <li className={cx('avatar-item')}>
                    <NoMatchIcon />
                  </li>
                </ul>
                <span className={cx('footer-copy')}>Waiting to be matched</span>
              </div>
            </section>
          ))}
        </div>
      </article>
    </ContentBox>
  );
};

export default GetHelp;
