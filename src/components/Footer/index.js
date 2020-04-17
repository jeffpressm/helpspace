import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import MailChimpForm from 'components/form/MailChimpForm';
import SocialLockup from './SocialLockup';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  const { content } = useContext(SpreadsheetContext);
  const { Footer } = content;

  const FooterContent = {};
  Footer.forEach((row) => (FooterContent[row['Section']] = row['Body']));

  return (
    <footer className={cx('root')}>
      <h2 className={cx('headline')}>
        <div className={cx('line1')}>{FooterContent['Title 1']}</div>
        <div className={cx('line2')}>{FooterContent['Title 2']}</div>
      </h2>
      <div className={cx('form-container')}>
        <MailChimpForm />
      </div>
      <p className={cx('copy')}>{FooterContent['Description']}</p>
      <div className={cx('social')}>
        <SocialLockup
          {...{
            email: FooterContent['Email'],
            linkedin: FooterContent['LinkedIn'],
            instagram: FooterContent['Instagram'],
            twitter: FooterContent['Twitter'],
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
