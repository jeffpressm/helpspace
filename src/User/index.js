import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  // Here we can use the userId to query the Spreadsheet for user data

  return <div>Thanks for Guilding, {userId}</div>;
};

export default User;
