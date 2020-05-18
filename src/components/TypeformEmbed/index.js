import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import useUser from 'utils/hooks/useUser';
import { generateUuid } from 'utils/strings';

const TypeformEmbed = React.forwardRef(({ formUrl }, ref) => {
  const sEmail = window.localStorage.getItem('email');
  const [user] = useUser(sEmail);
  const id = generateUuid();

  // TODO Typeform iFrame doesn't update if any of these values change
  const params = {
    responseId: id,
    ...(user?.name && { name: user.name, existing: 'true', email: user.email }),
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
