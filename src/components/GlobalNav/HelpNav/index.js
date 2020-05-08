import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';

import ExternalLink from 'components/ExternalLink';
import { RouteList } from 'lib/routes';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './HelpNav.module.scss';

const cx = classNames.bind(styles);

const HelpNav = () => {
  const seenHowTo = window.localStorage.getItem('seenHowTo');
  const history = useHistory();
  const query = useSearchParams();
  const queryNext = query?.get('next');

  const handleClose = useCallback(() => {
    if (queryNext) {
      history.push(`${RouteList.dashboard}/${queryNext}`);
      return;
    }
    history.goBack();
  }, [history, queryNext]);

  return (
    <div className={cx('root')}>
      <div className={cx('section', 'section--1')}>
        <div className={cx('copy')}>
          For help at any time,{' '}
          <ExternalLink
            className={cx('support__link')}
            href="mailto:support@helpspace.co"
          >
            support@helpspace.co
          </ExternalLink>
        </div>
      </div>

      {seenHowTo && (
        <div className={cx('section', 'section--2')}>
          <button className={cx('close')} onClick={() => handleClose()}>
            <span className={cx('close-icon')}>×</span>{' '}
            <span className={cx('close-text')}>Close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HelpNav;
