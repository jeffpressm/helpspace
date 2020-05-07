import { responseSheets } from 'lib/sheets';
import { matchStatusType } from 'lib/status';

const getUserInfo = (responses, email) => {
  const findResponses = (response) => response['Email'] === email;
  const findUserInfo = (response) => response['Name'];
  const findMatchedResponses = (response) =>
    response['Advisor Email'] === email;

  const clientResponses = responses[responseSheets.client]
    .filter(findResponses)
    .map((client) => {
      const match = responses[responseSheets.match].find(
        (mat) => mat['Client Response ID'] === client.ID
      );
      const advisor =
        match &&
        responses[responseSheets.advisor].find(
          (adv) => adv['Email'] === match['Advisor Email']
        );
      return {
        ...client,
        advisor,
        Status:
          (match && (match.Status || matchStatusType.inProgress)) ||
          matchStatusType.waiting,
      };
    });

  const advisorResponses = responses[responseSheets.advisor].filter(
    findResponses
  );

  const matchedResponses = responses[responseSheets.match].filter(
    findMatchedResponses
  );

  const matches = matchedResponses.map((response) => {
    const client = responses[responseSheets.client].find(
      (client) => client.ID === response['Client Response ID']
    );
    return {
      ...client,
      Status: response['Status'] || matchStatusType.inProgress,
    };
  });

  const userInfo =
    clientResponses.find(findUserInfo) ||
    advisorResponses.find(findUserInfo) ||
    {};

  return {
    name: userInfo['Name'],
    email: userInfo['Email'],
    industry: userInfo['Industry'],
    role: userInfo['Role'],
    linkedIn: userInfo['LinkedIn'],
    location: userInfo['Location'],
    image: userInfo['Image'],
    clientResponses,
    advisorResponses,
    matches,
  };
};

export default getUserInfo;
