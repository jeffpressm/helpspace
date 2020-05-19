import { useCallback, useEffect, useState } from 'react';
import Papa from 'papaparse';

function PapaCanYouParseMe(url) {
  return new Promise(function (resolve) {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: resolve,
    });
  });
}

const cachedSheets = {};

function useSpreadsheet(url) {
  const [data, setData] = useState();

  const fetch = useCallback(() => {
    cachedSheets[url] = PapaCanYouParseMe(url);
    cachedSheets[url].then(({ data }) => {
      setData(data);
    });
  }, [url]);

  useEffect(() => {
    if (!cachedSheets[url]) {
      cachedSheets[url] = PapaCanYouParseMe(url);
    }

    cachedSheets[url].then(({ data }) => {
      setData(data);
    });
  }, [url, fetch]);

  return [data, fetch];
}

export default useSpreadsheet;
