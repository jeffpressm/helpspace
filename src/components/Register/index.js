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
  const { setUserData } = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const userEmail = query?.get('email');
  const userType = query?.get('type');

  useEffect(() => {
    const existingEmail = window.localStorage.getItem('email');

    // Typeform returns email as  _____ for existing user flow
    const requestEmail = userEmail === '_____' ? existingEmail : userEmail;

    if (!existingEmail) {
      window.localStorage.setItem('email', requestEmail);
      const userInfo = getUserInfo(responses, requestEmail);
      setUserData(userInfo);
    }
  }, [userEmail, userType, history, setUserData, responses]);

  return (
    <InfoBlock
      title="Thanks for signing up! You’ll receive an email from us once we find
    a match."
      image={image}
      link={{
        text: 'Continue',
        action: `${RouteList.help}?as=${userType}`,
      }}
    />
  );
};

export default Register;
