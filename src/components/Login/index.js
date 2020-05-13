import React, { useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import ContentBox from 'components/layout/ContentBox';
import EmailForm from 'components/form/EmailForm';
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
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const findResponses = useCallback((response) => response['Email'] === email, [
    email,
  ]);

  // ALWAYS re-fetch data on submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchAdvisor();
    await fetchClient();

    const isAdvisor = !!AdvisorResponses.find(findResponses);
    const isClient = !!ClientResponses.find(findResponses);

    if (!isAdvisor && !isClient) {
      setError('This user does not exist');
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
