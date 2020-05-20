import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import ContentBox from 'components/layout/ContentBox';
import LoginForm from 'components/form/LoginForm';
import Markdown from 'components/Markdown';
import { RouteList } from 'lib/routes';
import { CMS_URL, RESPONSE_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

const cx = classNames.bind(styles);

const Login = () => {
  const [AdvisorResponses, fetchAdvisor] = useSpreadsheet(
    RESPONSE_URL['Advisor']
  );
  const [ClientResponses, fetchClient] = useSpreadsheet(RESPONSE_URL['Client']);
  const [content] = useSpreadsheet(CMS_URL['Login']);
  const LoginContent = pivotTable(content);

  const [error, setError] = useState();

  // ALWAYS re-fetch data on submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    // const password = e.target.password.value;

    // TODO update this area to authenticate with Netlify Identity
    await fetchAdvisor();
    await fetchClient();

    const findResponses = (response) => response['Email'] === email;

    const isAdvisor = !!AdvisorResponses.find(findResponses);
    const isClient = !!ClientResponses.find(findResponses);

    if (!isAdvisor && !isClient) {
      setError('Invalid email or password');
      return;
    }

    window.localStorage.setItem('email', email);

    // TODO We are intentionally reloading the page here
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
        <LoginForm
          formProps={{
            onSubmit: handleSubmit,
          }}
        >
          {error && <p className={cx('error')}>{error}</p>}
        </LoginForm>
      </div>
    </ContentBox>
  );
};

export default Login;
