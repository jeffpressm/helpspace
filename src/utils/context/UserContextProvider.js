import React, { createContext, useState, useEffect, useContext } from 'react';
import { SpreadsheetContext } from './SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const { responses } = useContext(SpreadsheetContext);
  const userEmail = window.localStorage.getItem('email');

  useEffect(() => {
    const userInfo = getUserInfo(responses, userEmail);
    setUserData(userInfo);
  }, [responses, userEmail]);

  if (!userData) return null;

  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
