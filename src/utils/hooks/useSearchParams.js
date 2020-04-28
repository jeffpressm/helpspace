import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState();
  const { search } = useLocation();

  useEffect(() => {
    setQueryParams(new URLSearchParams(search));
  }, [search]);

  return queryParams;
};

export default useQueryParams;
