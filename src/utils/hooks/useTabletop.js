import { useState, useEffect } from 'react';
import Tabletop from 'tabletop';

function getSheetData(id) {
  return Tabletop.init({
    key: id,
  });
}

function useTabletop(id) {
  const [entries, setEntries] = useState();

  useEffect(() => {
    getSheetData(id).then((data) => {
      const entries = {};
      Object.keys(data).forEach((k) => (entries[k] = data[k].elements));

      setEntries(entries);
    });
  }, [id, setEntries]);

  return entries;
}

export default useTabletop;
