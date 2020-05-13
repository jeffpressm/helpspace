import { useCallback, useEffect, useState } from 'react';
import Papa from 'papaparse';

function PapaCanYouParseMe(url) {
  return new Promise(function (resolve) {
    Papa.parse(`${url}?output=csv`, {
      download: true,
      header: true,
      complete: resolve,
    });
  });
}

const cachedSheets = {};

function useTabletop(url) {
  const [data, setData] = useState();

  const fetch = useCallback(() => {
    return new Promise(function (resolve) {
      PapaCanYouParseMe(url).then(({ data }) => {
        setData(data);
        cachedSheets.url = data;
        resolve();
      });
    });
  }, [url]);

  useEffect(() => {
    if (cachedSheets[url]) {
      setData(cachedSheets[url]);
      return;
    }
    if (!url) {
      return;
    }
    fetch();
  }, [url, fetch]);

  return [data, fetch];
}

export default useTabletop;
