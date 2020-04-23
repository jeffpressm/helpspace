import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { FormContext, openForm } from 'utils/context/Form';
import useIllustration from 'utils/hooks/useIllustration';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const Card = ({ title }) => {
  const { getRef, giveRef } = useContext(FormContext);
  const illustration = useIllustration();

  return (
    <div className={cx('challenge')}>
      <div className={cx('challenge-section', 'challenge-section--title')}>
        <h3 className={cx('challenge-title')}>{title}</h3>
      </div>
      <div className={cx('challenge-section', 'challenge-section--ctas')}>
        <ul className={cx('challenge-ctas')}>
          <li className={cx('challenge-cta')}>
            <button onClick={() => openForm(getRef)}>
              Get help
              <span className={cx('arrow')}>
                <ArrowIcon />
              </span>
            </button>
          </li>
          <li className={cx('challenge-cta')}>
            <button onClick={() => openForm(giveRef)}>
              Give help
              <span className={cx('arrow')}>
                <ArrowIcon />
              </span>
            </button>
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
