import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import MailChimpForm from 'components/form/MailChimpForm';
import SocialLockup from './SocialLockup';

import ThreeUp from './ThreeUp';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  const { content } = useContext(SpreadsheetContext);
  const { Footer } = content;

  const FooterContent = {};
  Footer.forEach((row) => (FooterContent[row['Section']] = row['Body']));

  return (
    <footer className={cx('root')}>
      <ThreeUp
        slot1={
          <div className={cx('logo-container')}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        }
        slot2={
          <div className={cx('content-container')}>
            <h2 className={cx('headline')}>
              <div className={cx('line1')}>{FooterContent['Title 1']}</div>
              <div className={cx('line2')}>{FooterContent['Title 2']}</div>
            </h2>
            <div className={cx('form-container')}>
              <MailChimpForm />
            </div>
          </div>
        }
        slot3={
          <SocialLockup
            {...{
              email: FooterContent['Email'],
              linkedin: FooterContent['LinkedIn'],
              instagram: FooterContent['Instagram'],
              twitter: FooterContent['Twitter'],
            }}
          />
        }
      />
      <div className={cx('legal-container')}>
        <ul className={cx('legal')}>
          <li>&copy; 2020 all rights reserved</li>
          <li>
            <Link to="/">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
