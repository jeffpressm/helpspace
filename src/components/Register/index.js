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
    window.localStorage.setItem('email', userEmail);

    if (data) {
      history.push(`/${userType}/${responseId}`);
    }
  }, [userEmail, userType, responseId, history, data]);

  return <div>Please wait while we register you...</div>;
};

export default Register;
