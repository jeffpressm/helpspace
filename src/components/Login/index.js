import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useHistory } from 'react-router-dom';

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
  const { content, responses } = useContext(SpreadsheetContext);
  const LoginContent = pivotTable(content['Login']);
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

    localStorage.setItem('email', email);
    setUserData(userInfo);

    history.push(RouteList.profile);
  };

  return (
    <ContentBox isTop className={cx('root')}>
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
