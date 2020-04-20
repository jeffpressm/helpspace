import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import About from 'components/About';
import Footer from 'components/Footer';
import { RouteList } from 'lib/routes';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import getImg from './assets/get.png';
import giveImg from './assets/give.png';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  const { content } = useContext(SpreadsheetContext);
  const { Hero: HeroContent } = content;

  return (
    <>
      <article className={cx('root')}>
        <section className={cx('section', 'get')}>
          <Link className={cx('link')} to={RouteList.get}>
            <div className={cx('content-container')}>
              <h2 className={cx('title')}>{HeroContent[0]['CTA']}</h2>
              <div className={cx('copy')}>{HeroContent[0]['Body']}</div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
              <div className={cx('image', 'image--get')}>
                <img role="presentation" src={getImg} alt="" />
              </div>
            </div>
          </Link>
        </section>
        <section className={cx('section', 'give')}>
          <Link className={cx('link')} to={RouteList.give}>
            <div className={cx('content-container')}>
              <h2 className={cx('title')}>{HeroContent[1]['CTA']}</h2>
              <div className={cx('copy')}>{HeroContent[1]['Body']}</div>
              <div className={cx('cta')}>
                <ArrowIcon />
              </div>
              <div className={cx('image', 'image--give')}>
                <img role="presentation" src={giveImg} alt="" />
              </div>
            </div>
          </Link>
        </section>
      </article>
      <About />
      <footer className={cx('footer')}>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
