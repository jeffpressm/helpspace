import React, { createContext, useState, useEffect, useContext } from 'react';
import { SpreadsheetContext } from './SpreadsheetContextProvider';
import { generateUuid } from '../strings';

export const UserContext = createContext({
  userData: {},
  setUserData: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const { responses } = useContext(SpreadsheetContext);

  useEffect(() => {
    if (!responses || !responses['Users']) {
      return;
    }
    const existingUserId = window.localStorage.getItem('userId');

    const userId = existingUserId || generateUuid();

    if (existingUserId) {
      const userInfo = responses['Users'].find((c) => c['ID'] === userId);
      setUserData({ id: userId, ...userInfo });
    } else {
      window.localStorage.setItem('userId', userId);
      setUserData((data) => ({ ...data, id: userId }));
    }
  }, [userData.id, responses]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
