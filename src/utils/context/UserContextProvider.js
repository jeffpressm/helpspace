import React, { createContext, useState, useEffect, useContext } from 'react';
import { SpreadsheetContext } from './SpreadsheetContextProvider';

export const UserContext = createContext({
  userData: {},
  setUserData: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const spreadsheetData = useContext(SpreadsheetContext);

  useEffect(() => {
    const existingUserId = window.localStorage.getItem('userId');
    const userId = existingUserId || Date.now();

    if (existingUserId) {
      const userInfo = spreadsheetData.find((c) => c['ID'] === userId);
      setUserData({ id: userId, ...userInfo });
    } else {
      window.localStorage.setItem('userId', userId);
      setUserData((data) => ({ ...data, id: userId }));
    }
  }, [userData.id, spreadsheetData]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
