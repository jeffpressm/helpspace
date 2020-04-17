import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import classNames from 'classnames/bind';

import { UserContext } from 'utils/context/UserContextProvider';
import { generateUuid } from 'utils/strings';

import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

const SignUp = ({ formUrl }) => {
  const { name, email } = useContext(UserContext);
  const id = generateUuid();

  const params = {
    responseId: id,
    ...(name && { name, existing: 'true', email }),
  };

  const paramString = new URLSearchParams(params);

  return (
    <div className={cx('root')}>
      <ReactTypeformEmbed
        hideHeaders
        url={`${formUrl}?${paramString.toString()}`}
      />
    </div>
  );
};

export default SignUp;
