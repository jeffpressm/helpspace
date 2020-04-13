import { useState, useEffect } from 'react';
import Tabletop from 'tabletop';

function getSheetData(id) {
  return Tabletop.init({
    key: `https://docs.google.com/spreadsheets/d/${id}/pubhtml`,
    simpleSheet: true,
  });
}

function useTabletop(id) {
  const [data, setData] = useState();

  useEffect(() => {
    getSheetData(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return data;
}

export default useTabletop;
