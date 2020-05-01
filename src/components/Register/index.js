import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';
import { RouteList } from 'lib/routes';
import InfoBlock from 'components/InfoBlock';
import image from 'assets/illustrations/illustration 2.png';

const Register = () => {
  const [fetchAttempts, setFetchAttempts] = useState(0);
  const { email: existingEmail, setUserData } = useContext(UserContext);
  const {
    responses,
    fetch: { responses: fetchResponses },
  } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const queryEmail = query?.get('email');

  // Typeform returns email as  _____ for existing user flow
  const requestEmail = queryEmail === '_____' ? existingEmail : queryEmail;
  const userInfo = getUserInfo(responses, requestEmail);

  if (userInfo.email) {
    window.localStorage.setItem('email', userInfo.email);
    setUserData(userInfo);
  }

  useEffect(() => {
    if (userInfo.email || fetchAttempts >= 3) {
      return;
    }

    const timer = setTimeout(() => {
      setFetchAttempts((f) => f + 1);
      fetchResponses();
    }, 1000);

    return () => clearTimeout(timer);
  }, [fetchAttempts, fetchResponses, userInfo]);

  return (
    <InfoBlock
      theme="red"
      title="Thanks for signing up! You’ll receive an email from us once we find a match."
      image={image}
      link={{
        text: 'Continue',
        action: RouteList.help,
      }}
    />
  );
};

export default Register;
