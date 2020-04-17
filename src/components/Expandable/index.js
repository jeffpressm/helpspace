import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Expandable.module.scss';

const cx = classNames.bind(styles);

const Expandable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={cx('root')}>
      <button
        className={cx('title')}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
        <span className={cx('indicator')}>+</span>
      </button>
      <div className={cx('content', isOpen && 'content--open')}>{children}</div>
    </section>
  );
};

export default Expandable;
