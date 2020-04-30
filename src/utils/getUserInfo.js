import { responseSheets } from 'lib/sheets';

const getUserInfo = (responses, email) => {
  const findResponses = (response) => response['Email'] === email;
  const findUserInfo = (response) => response['Name'];

  const clientResponses = responses[responseSheets.client].filter(
    findResponses
  );
  const advisorResponses = responses[responseSheets.advisor].filter(
    findResponses
  );
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
  };
};

export default getUserInfo;
