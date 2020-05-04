import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as GoogleSheetIcon } from 'assets/icons/google-sheet.svg';
import { ReactComponent as DashboardArrowIcon } from 'assets/icons/dashboard-arrow.svg';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const Matches = ({ client, user }) => (
  <div className={cx('match-container')}>
    <h3 className={cx('match-title')}>{client['Challenge']}</h3>
    <div className={cx('match-box')}>
      <div className={cx('info-wrapper')}>
        <h4 className={cx('info-wrapper-title')}>
          You’re helping {client['Name']}
        </h4>
        <p className={cx('info-wrapper-text')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          pretium neque, et commodo urna.
        </p>
      </div>
      <div className={cx('image-wrapper')}>
        <img alt="" className={cx('match-image')} src={user.image} />
        <img
          alt=""
          className={cx('client-image', 'match-image')}
          src={client['Image']}
        />
      </div>
    </div>
    <a
      className={cx('view-project-link')}
      href={client['Doc Url']}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GoogleSheetIcon />
      <span className={cx('view-project-link-text')}>View project</span>
      <DashboardArrowIcon />
    </a>
  </div>
);

export default Matches;
