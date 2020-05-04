import { responseSheets } from 'lib/sheets';

const getUserInfo = (responses, email) => {
  const findResponses = (response) => response['Email'] === email;
  const findUserInfo = (response) => response['Name'];
  const findMatchedResponses = (response) =>
    response['Advisor Email'] === email;

  const clientResponses = responses[responseSheets.client].filter(
    findResponses
  );
  const advisorResponses = responses[responseSheets.advisor].filter(
    findResponses
  );

  const matchedResponses = responses[responseSheets.match].filter(
    findMatchedResponses
  );

  const matchedClients = matchedResponses.map((response) => {
    return responses[responseSheets.client].find(
      (client) => client.ID === response['Client Response ID']
    );
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
    matchedClients,
  };
};

export default getUserInfo;
