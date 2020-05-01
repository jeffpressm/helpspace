import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';
import { RouteList } from 'lib/routes';
import InfoBlock from 'components/InfoBlock';
import image from 'assets/illustrations/illustration 2.png';

const Register = () => {
  const history = useHistory();
  const { email: existingEmail, setUserData } = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const queryEmail = query?.get('email');

  useEffect(() => {
    // Typeform returns email as  _____ for existing user flow
    const requestEmail = queryEmail === '_____' ? existingEmail : queryEmail;

    if (!existingEmail) {
      window.localStorage.setItem('email', requestEmail);
      const userInfo = getUserInfo(responses, requestEmail);
      setUserData(userInfo);
    }
  }, [existingEmail, queryEmail, history, setUserData, responses]);

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
