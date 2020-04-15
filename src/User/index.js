import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SpreadsheetContext } from '../utils/context/SpreadsheetContextProvider';

const User = () => {
  const { responses } = useContext(SpreadsheetContext);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    if (!responses || !responses['Users']) {
      return;
    }
    const newUserData = responses['Users'].find((c) => c['ID'] === userId);

    if (!newUserData) {
      setIsLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }

    setUserData(newUserData);
  }, [responses, setUserData, userId]);

  if (isLoading) {
    return <div>Please wait while we register you...</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <ul>
        {Object.keys(userData).map((key) => (
          <li>
            {key}: {userData[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
