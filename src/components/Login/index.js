import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useHistory } from 'react-router-dom';

import ContentBox from 'components/layout/ContentBox';
import EmailForm from 'components/form/EmailForm';
import { UserContext } from 'utils/context/UserContextProvider';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';

const cx = classNames.bind(styles);

const Login = () => {
  const { setUserData } = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const history = useHistory();
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = getUserInfo(responses, email);

    if (!userInfo.name) {
      setError('This user does not exist');
      return;
    }

    if (userInfo.clientResponses[0]) {
      history.push(`/user?email=${email}`);
    } else {
      history.push(`/expert?email=${email}`);
    }

    localStorage.setItem('email', email);
    setUserData(userInfo);
  };

  return (
    <ContentBox isTop className={cx('root')}>
      <label className={cx('title')} htmlFor="login">
        Enter your email to view your helpspace
      </label>
      <div className={cx('form-container')}>
        <EmailForm
          formProps={{
            onChange: handleEmailChange,
            onSubmit: handleSubmit,
          }}
          inputProps={{ id: 'login' }}
        />
      </div>
      {error && <p className={cx('error')}>{error}</p>}
    </ContentBox>
  );
};

export default Login;
