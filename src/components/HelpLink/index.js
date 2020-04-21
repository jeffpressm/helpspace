import React from 'react';
import styles from './HelpLink.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as HelpIcon } from 'assets/icons/help.svg';

const cx = classNames.bind(styles);

const HelpLink = ({ onClick }) => {
  return (
    <button onClick={onClick} className={cx('button')}>
      <span className={cx('text')}>How to use?</span>
      <HelpIcon className={cx('icon')} />
    </button>
  );
};

export default HelpLink;
