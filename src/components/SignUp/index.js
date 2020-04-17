import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { UserContext } from 'utils/context/UserContextProvider';
import { generateUuid } from 'utils/strings';

const SignUp = ({ formUrl }) => {
  const { name, email } = useContext(UserContext);
  const id = generateUuid();

  const params = {
    responseId: id,
    ...(name && { name, existing: 'true', email }),
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
