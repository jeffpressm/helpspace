import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ContentBox from 'components/layout/ContentBox';

import styles from './InfoBlock.module.scss';

const cx = classNames.bind(styles);

const InfoBlock = ({ theme, title, text, cta, link, image }) => {
  return (
    <ContentBox theme={theme} className={cx('info')} isTop>
      <div className={cx('wrapper')}>
        <div className={cx('content')}>
          <h3 className={cx('title')}>{title}</h3>
          {text && <p className={cx('text')}>{text}</p>}
          {cta && (
            <button className={cx('button')} onClick={cta.action}>
              {`${cta.text} help`}
            </button>
          )}
          {link && (
            <Link className={cx('link')} to={link.action}>
              {link.text}
            </Link>
          )}
        </div>
        <div className={cx('image-wrapper')}>
          <img className={cx('image')} src={image} alt="" />
        </div>
      </div>
    </ContentBox>
  );
};

export default InfoBlock;
