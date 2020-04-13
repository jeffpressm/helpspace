import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SpreadsheetContext } from '../utils/context/SpreadsheetContextProvider';

const User = () => {
  const spreadsheetData = useContext(SpreadsheetContext);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const newUserData = spreadsheetData.find((c) => c['ID'] === userId);

    if (!newUserData) {
      setIsLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }

    setUserData(newUserData);
  }, [spreadsheetData, setUserData, userId]);

  if (isLoading) {
    return <div>Please wait while we register you...</div>;
  }

  if (!userData) {
    return null;
  }

  const { Name: name, Topic: topic, Email: email } = userData;

  return (
    <div>
      Thanks for Guilding, {name}. We'll email you at {email} when we've found
      an {topic} expert to help you.
    </div>
  );
};

export default User;
