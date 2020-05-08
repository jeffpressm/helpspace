import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import ContentBox from 'components/layout/ContentBox';
import EmailForm from 'components/form/EmailForm';
import Markdown from 'components/Markdown';
import { RouteList } from 'lib/routes';
import { UserContext } from 'utils/context/UserContextProvider';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import { pivotTable } from 'utils/pivotTable';

const cx = classNames.bind(styles);

const Login = () => {
  const { setUserData } = useContext(UserContext);
  const {
    content,
    responses,
    fetch: { responses: fetchResponses },
  } = useContext(SpreadsheetContext);
  const LoginContent = pivotTable(content['Login']);
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // ALWAYS re-fetch data on submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchResponses();

    const userInfo = getUserInfo(responses, email);

    if (!userInfo.name) {
      setError('This user does not exist');
      return;
    }

    localStorage.setItem('email', email);
    setUserData(userInfo);

    // We are intentionally reloading the page here
    // so the Typeform components update
    window.location = RouteList.dashboard;
  };

  return (
    <ContentBox isTop>
      <h1 className={cx('headline')}>{LoginContent['Headline']}</h1>
      <div className={cx('body')}>
        <Markdown source={LoginContent['Body']} />
      </div>
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
