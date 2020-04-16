import React, { useState, useContext } from 'react';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useHistory } from 'react-router-dom';
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
    <form className={cx('root')}>
      <label className={cx('title')}>
        Enter your email to view your helpspace
      </label>
      <div className={cx('field')}>
        <input
          className={cx('input')}
          type="email"
          placeholder="Email address"
          onChange={handleEmailChange}
        />
        <button className={cx('button')} onClick={handleSubmit}>
          <ArrowIcon />
        </button>
      </div>
      {error && <p className={cx('error')}>{error}</p>}
    </form>
  );
};

export default Login;
