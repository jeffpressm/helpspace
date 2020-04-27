import { responseSheets } from 'lib/sheets';

const getUserInfo = (responses, email) => {
  const findResponses = (response) => response['Email'] === email;
  const findUserInfo = (response) => response['Name'];

  const clientResponses = responses[responseSheets.client].filter(
    findResponses
  );
  const expertResponses = responses[responseSheets.advisor].filter(
    findResponses
  );
  const userInfo =
    clientResponses.find(findUserInfo) ||
    expertResponses.find(findUserInfo) ||
    {};

  return {
    name: userInfo['Name'],
    email: userInfo['Email'],
    industry: userInfo['Industry'],
    role: userInfo['Role'],
    location: userInfo['Location'],
    image: userInfo['Image'],
    clientResponses,
    expertResponses,
  };
};

export default getUserInfo;
