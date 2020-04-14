import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { UserContext } from '../utils/context/UserContextProvider';

const NeedHelp = () => {
  const { id, Name: name } = useContext(UserContext);

  if (!id) return null;

  const params = {
    userid: id,
    ...(name && { name, existing: 'true' }),
  };

  const paramString = new URLSearchParams(params);

  return (
    <ReactTypeformEmbed
      url={`${process.env.REACT_APP_TYPEFORM_URL}?${paramString.toString()}`}
    />
  );
};

export default NeedHelp;
