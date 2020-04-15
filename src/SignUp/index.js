import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { UserContext } from '../utils/context/UserContextProvider';

const SignUp = ({ formUrl }) => {
  const { id, Name: name } = useContext(UserContext);

  if (!id) return null;

  const params = {
    userid: id,
    ...(name && { name, existing: 'true' }),
  };

  const paramString = new URLSearchParams(params);

  return (
    <ReactTypeformEmbed
      hideHeaders
      url={`${formUrl}?${paramString.toString()}`}
    />
  );
};

export default SignUp;
