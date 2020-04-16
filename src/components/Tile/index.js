import React from 'react';

import styles from './Tile.module.scss';
import classNames from 'classnames/bind';
import docIcon from 'assets/icons/doc.png';

const cx = classNames.bind(styles);

const Tile = ({ url, title }) => {
  return (
    <a href={url} className={cx('root')}>
      <div>
        <img src={docIcon} alt="Google Doc symbol" />
      </div>
      <span>{title}</span>
    </a>
  );
};

export default Tile;
