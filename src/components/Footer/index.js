import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

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
      <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
        <label className={cx('label')}>
          <input type="email" placeholder="Email address" required />
          <button type="submit">
            <ArrowIcon />
          </button>
        </label>
      </form>
      <p className={cx('copy')}>{FooterContent['Description']}</p>
      <div className={cx('social')}>TODO</div>
    </footer>
  );
};

export default Footer;
