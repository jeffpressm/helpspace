import React from 'react';
import classNames from 'classnames/bind';

import Avatar from 'components/Avatar';
import Tile from 'components/Tile';
import { ReactComponent as NoMatchIcon } from './assets/no-match.svg';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const Waiting = ({ client, user }) => {
  return (
    <section key={client['Doc Url']} className={cx('request')}>
      <h2 className={cx('title')}>{client['Challenge']}</h2>
      <div className={cx('detail')}>
        <Tile
          href={client['Doc Url']}
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
  );
};

export default Waiting;
