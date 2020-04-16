import React, { createContext, useState, useEffect, useContext } from 'react';
import { SpreadsheetContext } from './SpreadsheetContextProvider';
import { responseSheets } from '../../lib/sheets';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const { responses } = useContext(SpreadsheetContext);
  const userEmail = window.localStorage.getItem('email');

  useEffect(() => {
    const findResponses = (response) => response['Email'] === userEmail;
    const findUserInfo = (response) => response['Name'];

    const clientResponses = responses[responseSheets.user].filter(
      findResponses
    );
    const expertResponses = responses[responseSheets.expert].filter(
      findResponses
    );
    const userInfo =
      clientResponses.find(findUserInfo) ||
      clientResponses.find(findUserInfo) ||
      {};

    setUserData({
      name: userInfo['Name'],
      clientResponses,
      expertResponses,
    });
  }, [responses, userEmail]);

  if (!userData) return null;

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
