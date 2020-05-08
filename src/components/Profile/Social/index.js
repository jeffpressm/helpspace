import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import useClipboard from 'react-use-clipboard';

import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import ExternalLink from 'components/ExternalLink';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

import styles from './Social.module.scss';

const cx = classNames.bind(styles);

const getCategories = (responses) =>
  responses.reduce((acc, val) => {
    if (val['Category']) {
      acc.push(val['Category']);
      return acc;
    }

    const list = val['Categories'].split(', ');
    acc.push(...list);
    return acc;
  }, []);

const ProfileSocial = ({ user }) => {
  const [shareString, setShareString] = useState();
  const [isCopied, setCopied] = useClipboard(shareString);
  const { content } = useContext(SpreadsheetContext);
  const ProfileContent = pivotTable(content['Profile']);

  useEffect(() => {
    const shareStringPrefix = user.advisorResponses.length
      ? ProfileContent['Advisor Share Copy']
      : ProfileContent['Client Share Copy'];

    const shareResponses = user.advisorResponses.length
      ? user.advisorResponses
      : user.clientResponses;

    setShareString(
      `${shareStringPrefix} ${getCategories(shareResponses)
        .slice(0, 3)
        .join(', ')}.`
    );
  }, [user, ProfileContent]);

  return (
    <>
      <h2 className={cx('heading')}>{ProfileContent['Social CTA']}</h2>
      <p className={cx('quote')}>{shareString}</p>
      <ul className={cx('share')}>
        <li className={cx('share__item')}>
          <ExternalLink
            className={cx('share__button')}
            href={`https://www.linkedin.com/shareArticle?mini=true&title=Helpspace&summary=${encodeURIComponent(
              shareString
            )}&url=${encodeURIComponent('https://helpspace.co')}`}
          >
            <div className={cx('share__icon')}>
              <LinkedInIcon />
            </div>
            <span className={cx('share__label')}>LinkedIn</span>
          </ExternalLink>
        </li>
        <li className={cx('share__item')}>
          <ExternalLink
            className={cx('share__button')}
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              'https://helpspace.co'
            )}&text=${encodeURIComponent(shareString)}`}
          >
            <div className={cx('share__icon')}>
              <TwitterIcon />
            </div>
            <span className={cx('share__label')}>Twitter</span>
          </ExternalLink>
        </li>
        <li className={cx('share__item')}>
          <ExternalLink
            className={cx('share__button')}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              'https://helpspace.co'
            )}`}
          >
            <div className={cx('share__icon')}>
              <FacebookIcon />
            </div>
            <span className={cx('share__label')}>Facebook</span>
          </ExternalLink>
        </li>
        <li className={cx('share__item')}>
          <button className={cx('share__button')} onClick={setCopied}>
            <div className={cx('share__icon')}>
              <CopyIcon />
            </div>
            <span className={cx('share__label')}>
              {isCopied ? 'Copied!' : 'Copy text'}
            </span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default ProfileSocial;
