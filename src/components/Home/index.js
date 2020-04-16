import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { RouteList } from 'lib/routes';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <article className={cx('root')}>
      <section className={cx('section', 'get')}>
        <Link className={cx('link')} to={RouteList.get}>
          <h2 className={cx('title')}>Get help</h2>
          <div className={cx('copy')}>
            We all need help or know small businesses that do. Get operational
            advice for your most pressing challenges. Pay it forward if you can.
          </div>
          <div className={cx('cta')}>
            <ArrowIcon />
          </div>
        </Link>
      </section>
      <section className={cx('section', 'give')}>
        <Link className={cx('link')} to={RouteList.give}>
          <h2 className={cx('title')}>Give help</h2>
          <div className={cx('copy')}>
            We all have skills that can help others during the crisis. Give
            operational advice to small businesses in need. Share whatever
            expertise you have.
          </div>
          <div className={cx('cta')}>
            <ArrowIcon />
          </div>
        </Link>
      </section>
    </article>
  );
};

export default Home;
