import { useCallback, useEffect, useState } from 'react';
import Tabletop from 'tabletop';

function getSheetData(id) {
  return new Promise(function (resolve) {
    const options = {
      key: id,
      callback: (data, tabletop) => resolve({ data, tabletop }),
    };
    Tabletop.init(options);
  });
}

function useTabletop(id) {
  const [entries, setEntries] = useState();

  const fetch = useCallback(() => {
    getSheetData(id).then(({ data }) => {
      const entries = {};
      Object.keys(data).forEach((k) => (entries[k] = data[k].elements));

      setEntries(entries);
    });
  }, [id]);

  useEffect(() => {
    if (!id) {
      return;
    }
    fetch();
  }, [id, fetch]);

  return [entries, fetch];
}

export default useTabletop;
