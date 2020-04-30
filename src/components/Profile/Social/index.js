import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import useClipboard from 'react-use-clipboard';

import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';
import { pivotTable } from 'utils/pivotTable';

import styles from './Social.module.scss';

const cx = classNames.bind(styles);

const getCategories = (responses) =>
  responses.reduce((acc, val) => {
    const list = val['Categories'].split(', ');
    acc.push(...list);
    return acc;
  }, []);

const ProfileSocial = () => {
  const [shareString, setShareString] = useState();
  const [isCopied, setCopied] = useClipboard(shareString);
  const { content, responses } = useContext(SpreadsheetContext);
  const ProfileContent = pivotTable(content['Profile']);
  const query = useSearchParams();
  const email = query?.get('email');
  const { clientResponses, expertResponses } = getUserInfo(responses, email);

  useEffect(() => {
    const shareStringPrefix = expertResponses.length
      ? ProfileContent['Advisor Share Copy']
      : ProfileContent['Client Share Copy'];

    const shareResponses = expertResponses.length
      ? expertResponses
      : clientResponses;

    setShareString(
      `${shareStringPrefix} ${getCategories(shareResponses)
        .slice(0, 3)
        .join(', ')}.`
    );
  }, [clientResponses, expertResponses, ProfileContent]);

  return (
    <>
      <h2 className={cx('heading')}>{ProfileContent['Social CTA']}</h2>
      <p className={cx('quote')}>{shareString}</p>
      <ul className={cx('share')}>
        <li className={cx('share__item')}>
          <a
            className={cx('share__button')}
            href={`https://www.linkedin.com/shareArticle?mini=true&title=Helpspace&summary=${encodeURIComponent(
              shareString
            )}&url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={cx('share__icon')}>
              <LinkedInIcon />
            </div>
            <span className={cx('share__label')}>LinkedIn</span>
          </a>
        </li>
        <li className={cx('share__item')}>
          <a
            className={cx('share__button')}
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(shareString)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={cx('share__icon')}>
              <TwitterIcon />
            </div>
            <span className={cx('share__label')}>Twitter</span>
          </a>
        </li>
        <li className={cx('share__item')}>
          <a
            className={cx('share__button')}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={cx('share__icon')}>
              <FacebookIcon />
            </div>
            <span className={cx('share__label')}>Facebook</span>
          </a>
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
