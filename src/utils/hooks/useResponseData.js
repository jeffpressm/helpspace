import { useState, useEffect, useContext } from 'react';
import { SpreadsheetContext } from '../context/SpreadsheetContextProvider';

function useResponseData(email, sheetId) {
  const { responses } = useContext(SpreadsheetContext);
  const [responseData, setResponseData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!responses || !responses[sheetId]) {
      return;
    }
    const newresponseData = responses[sheetId].find(
      (c) => c['Email'] === email
    );

    if (!newresponseData) {
      setIsLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }

    setResponseData(newresponseData);
  }, [responses, setResponseData, email, sheetId]);

  return { data: responseData, isLoading };
}

export default useResponseData;
