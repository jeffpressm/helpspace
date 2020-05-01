import React from 'react';

import styles from './Tile.module.scss';
import classNames from 'classnames/bind';
import docIcon from 'assets/icons/doc.png';

const cx = classNames.bind(styles);

const Tile = ({ label, href }) => {
  return (
    <a
      className={cx('root')}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <div>
        <img src={docIcon} alt="Google Doc symbol" />
      </div>
      <span>{label}</span>
    </a>
  );
};

export default Tile;
