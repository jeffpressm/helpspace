import React, { createContext, useState, useEffect, useContext } from 'react';
import { ResponsesContext } from './ResponsesContextProvider';
import { generateUuid } from '../strings';

export const UserContext = createContext({
  userData: {},
  setUserData: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const entries = useContext(ResponsesContext);

  useEffect(() => {
    if (!entries || !entries['Users']) {
      return;
    }
    const existingUserId = window.localStorage.getItem('userId');

    const userId = existingUserId || generateUuid();

    if (existingUserId) {
      const userInfo = entries['Users'].find((c) => c['ID'] === userId);
      setUserData({ id: userId, ...userInfo });
    } else {
      window.localStorage.setItem('userId', userId);
      setUserData((data) => ({ ...data, id: userId }));
    }
  }, [userData.id, entries]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
