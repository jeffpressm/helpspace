import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { UserContext } from '../utils/context/UserContextProvider';

const NeedHelp = () => {
  const userData = useContext(UserContext);

  if (!userData.id) return null;

  return (
    <ReactTypeformEmbed
      url={`${process.env.REACT_APP_TYPEFORM_URL}?userid=${userData.id}`}
    />
  );
};

export default NeedHelp;
