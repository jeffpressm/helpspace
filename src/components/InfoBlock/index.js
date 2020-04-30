import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ContentBox from 'components/layout/ContentBox';

import styles from './InfoBlock.module.scss';

const cx = classNames.bind(styles);

const InfoBlock = (props) => {
  return (
    <ContentBox theme="none" className={cx('info')} isTop>
      <div className={cx('wrapper')}>
        <div className={cx('content')}>
          <h3 className={cx('title')}>{props.title}</h3>
          {props.text && <p className={cx('text')}>{props.text}</p>}
          {props.cta && (
            <button className={cx('button')} onClick={props.cta.action}>
              {`${props.cta.text} help`}
            </button>
          )}
          {props.link && (
            <Link className={cx('link')} to={props.link.action}>
              {props.link.text}
            </Link>
          )}
        </div>
        <div className={cx('image-wrapper')}>
          <img className={cx('image')} src={props.image} alt="" />
        </div>
      </div>
    </ContentBox>
  );
};

export default InfoBlock;
