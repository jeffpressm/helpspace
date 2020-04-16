import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { UserContext } from 'utils/context/UserContextProvider';
import { generateUuid } from 'utils/strings';

const SignUp = ({ formUrl }) => {
  const { name } = useContext(UserContext);
  const id = generateUuid();

  const params = {
    responseId: id,
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
