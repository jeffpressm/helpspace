import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { RouteList } from 'lib/routes';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import leftImg from './assets/left.png';
import rightImg from './assets/right.png';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

const Hero = () => {
  const { content } = useContext(SpreadsheetContext);
  const { Hero: HeroContent } = content;

  return (
    <article className={cx('root')}>
      <section className={cx('section', 'get')}>
        <Link className={cx('link')} to={RouteList.get}>
          <div className={cx('content-container')}>
            <h2 className={cx('title')}>{HeroContent[0]['CTA']}</h2>
            <div className={cx('copy')}>{HeroContent[0]['Body']}</div>
            <div className={cx('cta')}>
              <ArrowIcon />
            </div>
          </div>
          <div className={cx('image-container')}>
            <img role="presentation" src={leftImg} alt="" />
          </div>
        </Link>
      </section>
      <section className={cx('section', 'give')}>
        <Link className={cx('link')} to={RouteList.give}>
          <div className={cx('image-container')}>
            <img role="presentation" src={rightImg} alt="" />
          </div>
          <div className={cx('content-container')}>
            <h2 className={cx('title')}>{HeroContent[1]['CTA']}</h2>
            <div className={cx('copy')}>{HeroContent[1]['Body']}</div>
            <div className={cx('cta')}>
              <ArrowIcon />
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
};

export default Hero;
