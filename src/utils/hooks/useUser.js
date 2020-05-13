import { useCallback, useState, useEffect } from 'react';
import { RESPONSE_URL } from 'lib/sheets';
import { matchStatusType } from 'lib/status';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';

function useUser(email) {
  const [user, setUser] = useState();
  const [AdvisorResponses] = useSpreadsheet(RESPONSE_URL['Advisor']);
  const [ClientResponses] = useSpreadsheet(RESPONSE_URL['Client']);
  const [Matches] = useSpreadsheet(RESPONSE_URL['Match']);

  const findResponses = useCallback((response) => response['Email'] === email, [
    email,
  ]);

  const findMatchedResponses = useCallback(
    (response) => response['Advisor Email'] === email,
    [email]
  );

  const findUserInfo = useCallback((response) => response['Name'], []);

  useEffect(() => {
    if (!AdvisorResponses || !ClientResponses || !Matches) {
      return;
    }

    const newClientResponses = ClientResponses.filter(findResponses).map(
      (client) => {
        const match = Matches.find(
          (mat) => mat['Client Response ID'] === client.ID
        );
        const advisor =
          match &&
          AdvisorResponses.find(
            (adv) => adv['Email'] === match['Advisor Email']
          );
        return {
          ...client,
          advisor,
          Status:
            (match && (match.Status || matchStatusType.inProgress)) ||
            matchStatusType.waiting,
        };
      }
    );

    const newAdvisorResponses = AdvisorResponses.filter(findResponses);

    const newMatchedResponses = Matches.filter(findMatchedResponses);

    const newMatches = newMatchedResponses.map((response) => {
      const client = ClientResponses.find(
        (client) => client.ID === response['Client Response ID']
      );
      return {
        ...client,
        Status: response['Status'] || matchStatusType.inProgress,
      };
    });

    const newUserInfo = {
      ...newClientResponses.find(findUserInfo),
      ...newAdvisorResponses.find(findUserInfo),
    };

    setUser({
      name: newUserInfo['Name'],
      email: newUserInfo['Email'],
      industry: newUserInfo['Industry'],
      role: newUserInfo['Role'],
      linkedIn: newUserInfo['LinkedIn'],
      location: newUserInfo['Location'],
      image: newUserInfo['Image'],
      clientResponses: newClientResponses,
      advisorResponses: newAdvisorResponses,
      matches: newMatches,
    });
  }, [
    AdvisorResponses,
    ClientResponses,
    findMatchedResponses,
    findResponses,
    findUserInfo,
    Matches,
  ]);

  return [user];
}

export default useUser;
