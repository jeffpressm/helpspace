import React from 'react';
import { useParams } from 'react-router-dom';
import useUserData from '../utils/hooks/useUserData';

const Expert = () => {
  const { userId } = useParams();
  const { data, isLoading } = useUserData(userId, 'Experts');

  if (isLoading) {
    return <div>Please wait while we register you...</div>;
  }

  if (!data) {
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
