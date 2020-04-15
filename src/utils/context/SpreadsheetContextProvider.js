import React, { createContext, useState, useEffect } from 'react';
import useTabletop from '../hooks/useTabletop';

export const SpreadsheetContext = createContext();

const SpreadsheetContextProvider = ({ children }) => {
  const [spreadsheetData, setSpreadsheetData] = useState();
  const responses = useTabletop(process.env.REACT_APP_RESPONSES_SPREADSHEET_ID);
  const content = useTabletop(process.env.REACT_APP_CMS_SPREADSHEET_ID);

  useEffect(() => {
    if (!responses || !content) {
      return;
    }

    setSpreadsheetData({ responses, content });
  }, [responses, content, setSpreadsheetData]);

  if (!spreadsheetData) {
    return null;
  }

  return (
    <SpreadsheetContext.Provider value={spreadsheetData}>
      {children}
    </SpreadsheetContext.Provider>
  );
};

export default SpreadsheetContextProvider;
