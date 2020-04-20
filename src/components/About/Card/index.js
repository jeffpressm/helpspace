import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { RouteList } from 'lib/routes';
import useIllustration from 'utils/hooks/useIllustration';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const Card = ({ title }) => {
  const illustration = useIllustration();

  return (
    <div className={cx('challenge')}>
      <div className={cx('challenge-section', 'challenge-section--title')}>
        <h3 className={cx('challenge-title')}>{title}</h3>
      </div>
      <div className={cx('challenge-section', 'challenge-section--ctas')}>
        <ul className={cx('challenge-ctas')}>
          <li className={cx('challenge-cta')}>
            <Link to={RouteList.get}>
              Get help
              <span className={cx('arrow')}>
                <ArrowIcon />
              </span>
            </Link>
          </li>
          <li className={cx('challenge-cta')}>
            <Link to={RouteList.give}>
              Give help
              <span className={cx('arrow')}>
                <ArrowIcon />
              </span>
            </Link>
          </li>
        </ul>
        {illustration && (
          <div className={cx('challenge-image')}>
            <img src={illustration} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
