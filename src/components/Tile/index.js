import React from 'react';
import classNames from 'classnames/bind';

import docIcon from 'assets/icons/doc.png';
import ExternalLink from 'components/ExternalLink';

import styles from './Tile.module.scss';
const cx = classNames.bind(styles);

const Tile = ({ label, href }) => {
  return (
    <ExternalLink className={cx('root')} href={href}>
      <div>
        <img src={docIcon} alt="Google Doc symbol" />
      </div>
      <span>{label}</span>
    </ExternalLink>
  );
};

export default Tile;
