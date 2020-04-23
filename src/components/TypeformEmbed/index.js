import React, { useContext } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import { UserContext } from 'utils/context/UserContextProvider';
import { generateUuid } from 'utils/strings';

const TypeformEmbed = React.forwardRef(({ formUrl }, ref) => {
  const { name, email } = useContext(UserContext);
  const id = generateUuid();

  const params = {
    responseId: id,
    ...(name && { name, existing: 'true', email }),
  };

  const paramString = new URLSearchParams(params);

  return (
    <ReactTypeformEmbed
      ref={ref}
      hideHeaders
      popup
      style={{ zIndex: '-1' }}
      url={`${formUrl}?${paramString.toString()}`}
    />
  );
});

export default TypeformEmbed;
