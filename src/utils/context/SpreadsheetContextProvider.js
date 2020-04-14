import React, { createContext, useState, useEffect } from 'react';
import useTabletop from '../hooks/useTabletop';

export const SpreadsheetContext = createContext();

const SpreadsheetContextProvider = ({ children }) => {
  const [spreadsheetData, setSpreadsheetData] = useState();
  const entries = useTabletop('1SMus2rG-kjfy2SXASC-V8trxB4BFF7ITx-QvaoBOags');

  useEffect(() => {
    if (!entries) {
      return;
    }

    setSpreadsheetData(entries);
  }, [entries, setSpreadsheetData]);

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
