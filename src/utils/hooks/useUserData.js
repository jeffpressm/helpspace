import { useState, useEffect, useContext } from 'react';
import { SpreadsheetContext } from '../context/SpreadsheetContextProvider';

function useUserData(userId, sheetId) {
  const { responses } = useContext(SpreadsheetContext);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!responses || !responses[sheetId]) {
      return;
    }
    const newUserData = responses[sheetId].find((c) => c['ID'] === userId);

    if (!newUserData) {
      setIsLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }

    setUserData(newUserData);
  }, [responses, setUserData, userId, sheetId]);

  return { data: userData, isLoading };
}

export default useUserData;
