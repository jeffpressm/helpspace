import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const NeedHelp = () => {
  // Here we generate a unique user ID (just a timestamp for now) and pass that to the typeform
  // We can also set that in a cookie to identify returning users

  const userId = Date.now();

  return (
    <ReactTypeformEmbed
      url={`${process.env.REACT_APP_TYPEFORM_URL}?userid=${userId}`}
      onSubmit={(args) => {
        console.log('submitted:', args);
      }}
    />
  );
};

export default NeedHelp;
