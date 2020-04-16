import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useResponseData from '../../utils/hooks/useResponseData';
import { responseSheets } from '../../lib/sheets';

const Register = () => {
  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const userEmail = query.get('email');
  const userType = query.get('type');
  const responseId = query.get('responseId');
  const { data } = useResponseData(responseId, responseSheets[userType]);

  useEffect(() => {
    const existingEmail = window.localStorage.getItem('email');

    // Typeform returns email as  _____ for existing user flow
    const requestEmail = userEmail === '_____' ? existingEmail : userEmail;

    if (!existingEmail) {
      window.localStorage.setItem('email', requestEmail);
    }

    if (data) {
      history.push(`/${userType}?email=${requestEmail}`);
    }
  }, [userEmail, userType, responseId, history, data]);

  return <div>Please wait while we register you...</div>;
};

export default Register;
