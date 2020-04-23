import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { FormContext, openForm } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import leftImg from './assets/left.png';
import rightImg from './assets/right.png';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

const Hero = () => {
  const { getRef, giveRef } = useContext(FormContext);
  const [activeSection, setActiveSection] = useState();
  const { content } = useContext(SpreadsheetContext);
  const { Hero: HeroContent } = content;

  return (
    <>
      <article className={cx('root', `is-${activeSection}-active`)}>
        <section className={cx('section', 'get')}>
          <div className={cx('link')} onClick={() => openForm(getRef)}>
            <div
              className={cx('content-container')}
              onMouseEnter={() => setActiveSection('get')}
              onMouseLeave={() => setActiveSection()}
            >
              <h2 className={cx('title')}>{HeroContent[0]['CTA']}</h2>
              <div className={cx('copy')}>{HeroContent[0]['Body']}</div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
            </div>
            <div className={cx('image-container')}>
              <img role="presentation" src={leftImg} alt="" />
            </div>
          </div>
        </section>
        <section className={cx('section', 'give')}>
          <div className={cx('link')} onClick={() => openForm(giveRef)}>
            <div
              className={cx('content-container')}
              onMouseEnter={() => setActiveSection('give')}
              onMouseLeave={() => setActiveSection()}
            >
              <h2 className={cx('title')}>{HeroContent[1]['CTA']}</h2>
              <div className={cx('copy')}>{HeroContent[1]['Body']}</div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
            </div>
            <div className={cx('image-container')}>
              <img role="presentation" src={rightImg} alt="" />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Hero;
