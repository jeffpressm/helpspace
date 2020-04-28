import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames/bind';

import styles from './Markdown.module.scss';

const cx = classNames.bind(styles);

const Markdown = ({ source }) => (
  <ReactMarkdown className={cx('root')} linkTarget="_blank" source={source} />
);

export default Markdown;
