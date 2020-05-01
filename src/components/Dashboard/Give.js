import React from 'react';
import classNames from 'classnames/bind';

import styles from './Dashboard.module.scss';
import NoMatch from './Empty/NoMatch';

const cx = classNames.bind(styles);

const GiveHelp = () => {
  return <NoMatch />;
};

export default GiveHelp;
