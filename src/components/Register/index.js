import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import useSearchParams from 'utils/hooks/useSearchParams';
import { RouteList } from 'lib/routes';
import InfoBlock from 'components/InfoBlock';
import image from 'assets/illustrations/illustration 2.png';
import { pivotTable } from 'utils/pivotTable';

const Register = () => {
  const [fetchAttempts, setFetchAttempts] = useState(0);
  const { setUserData } = useContext(UserContext);
  const {
    responses,
    fetch: { responses: fetchResponses },
  } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const queryId = query?.get('id');

  const { content } = useContext(SpreadsheetContext);
  const RegisterContent = pivotTable(content['Register']);

  useEffect(() => {
    const newClientResponse = responses['Client'].find(
      (response) => response['ID'] === queryId
    );
    const newAdvisorResponse = responses['Advisor'].find(
      (response) => response['ID'] === queryId
    );

    if (newClientResponse) {
      const userInfo = getUserInfo(responses, newClientResponse['Email']);
      window.localStorage.setItem('email', userInfo.email);
      setUserData(userInfo);
      return;
    }

    if (newAdvisorResponse) {
      const userInfo = getUserInfo(responses, newAdvisorResponse['Email']);
      window.localStorage.setItem('email', userInfo.email);
      setUserData(userInfo);
      return;
    }

    if (fetchAttempts >= 3) {
      return;
    }

    const timer = setTimeout(() => {
      setFetchAttempts((f) => f + 1);
      fetchResponses();
    }, 3000);

    return () => clearTimeout(timer);
  }, [fetchAttempts, fetchResponses, queryId, setUserData, responses]);

  return (
    <InfoBlock
      theme="red"
      title={RegisterContent['Heading']}
      image={image}
      link={{
        text: RegisterContent['CTA'],
        action: `${RouteList.login}`,
      }}
    />
  );
};

export default Register;
