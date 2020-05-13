import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { CMS_URL } from 'lib/sheets';
import { pivotTable } from 'utils/pivotTable';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';

import ExternalLink from 'components/ExternalLink';
import MailChimpForm from 'components/form/MailChimpForm';
import SocialLockup from './SocialLockup';

import ThreeUp from './ThreeUp';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  const [content] = useSpreadsheet(CMS_URL['Footer']);
  const FooterContent = pivotTable(content);

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
        <ThreeUp
          className={cx('footer-links')}
          slot1={null}
          slot2={
            <ul className={cx('legal')}>
              <li>&copy; 2020 all rights reserved</li>
              <li>
                <ExternalLink href={FooterContent['Privacy Policy']}>
                  Privacy Policy
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={FooterContent['User Agreement']}>
                  User Agreement
                </ExternalLink>
              </li>
            </ul>
          }
          slot3={null}
        />
      </div>
    </footer>
  );
};

export default Footer;
