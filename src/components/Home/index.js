import React from 'react';
import classNames from 'classnames/bind';

import Footer from 'components/Footer';

import About from './About';
import Hero from './Hero';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <footer className={cx('footer-container')}>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
