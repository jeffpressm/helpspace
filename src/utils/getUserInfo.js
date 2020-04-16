import { responseSheets } from 'lib/sheets';

const getUserInfo = (responses, email) => {
  const findResponses = (response) => response['Email'] === email;
  const findUserInfo = (response) => response['Name'];

  const clientResponses = responses[responseSheets.user].filter(findResponses);
  const expertResponses = responses[responseSheets.expert].filter(
    findResponses
  );
  const userInfo =
    clientResponses.find(findUserInfo) ||
    expertResponses.find(findUserInfo) ||
    {};

  return {
    name: userInfo['Name'],
    clientResponses,
    expertResponses,
  };
};

export default getUserInfo;
