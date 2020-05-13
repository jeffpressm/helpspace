import React, { createContext, useState, useEffect } from 'react';
import useTabletop from '../hooks/useTabletop';

const RESPONSE_URL = {
  CLIENT:
    'https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=0?output=csv',
  ADVISOR:
    'https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=272579147?output=csv',
  MATCH:
    'https://docs.google.com/spreadsheets/d/1hqERQuL9Q5WGttew0v5JqxizXzBRrMoe7ID6jioT-cc/edit#gid=1370515805?output=csv',
};

export const SpreadsheetContext = createContext({
  responses: {},
  content: {},
  fetch: {
    responses: () => {},
    content: () => {},
  },
});

const SpreadsheetContextProvider = ({ children }) => {
  const [spreadsheetData, setSpreadsheetData] = useState();
  const [responses, fetchResponses] = useTabletop(
    process.env.REACT_APP_RESPONSES_SPREADSHEET_ID
  );
  const [content, fetchContent] = useTabletop(
    process.env.REACT_APP_CMS_SPREADSHEET_ID
  );

  useEffect(() => {
    // TODO data should be updated as soon as its available
    if (!responses || !content) {
      return;
    }

    setSpreadsheetData({
      responses,
      content,
      fetch: {
        responses: fetchResponses,
        content: fetchContent,
      },
    });
  }, [responses, fetchResponses, content, fetchContent, setSpreadsheetData]);

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
