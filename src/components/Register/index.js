import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useResponseData from '../../utils/hooks/useResponseData';
import { responseSheets } from '../../lib/sheets';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';

const Register = () => {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const userEmail = query.get('email');
  const userType = query.get('type');
  const { data } = useResponseData(userEmail, responseSheets[userType]);

  useEffect(() => {
    const existingEmail = window.localStorage.getItem('email');

    // Typeform returns email as  _____ for existing user flow
    const requestEmail = userEmail === '_____' ? existingEmail : userEmail;

    if (!existingEmail) {
      window.localStorage.setItem('email', requestEmail);
      const userInfo = getUserInfo(responses, requestEmail);
      setUserData(userInfo);
    }

    if (data) {
      history.push(`/${userType}?email=${requestEmail}`);
    }
  }, [userEmail, userType, history, data, setUserData, responses]);

  return <div>Please wait while we register you...</div>;
};

export default Register;
