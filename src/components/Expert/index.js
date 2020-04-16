import React from 'react';
import { useParams } from 'react-router-dom';
import useResponseData from 'utils/hooks/useResponseData';
import { responseSheets } from 'lib/sheets';

const Expert = () => {
  const { responseId } = useParams();
  const { data, isLoading } = useResponseData(
    responseId,
    responseSheets.expert
  );

  if (!data || isLoading) {
    return null;
  }

  return (
    <div>
      <ul>
        {Object.keys(data).map((key) => (
          <li>
            {key}: {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expert;
