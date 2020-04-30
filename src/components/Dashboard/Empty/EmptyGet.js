import React, { useContext } from 'react';
import { FormContext } from 'utils/context/Form';

import image from 'assets/illustrations/illustration 6.png';
import InfoBlock from 'components/InfoBlock';
import { openForm } from 'utils/context/Form';
import { USER_TYPE } from 'lib/users';

const content = {
  advisor: {
    title: 'Everyone could use a little help.',
    text:
      'Our community is all about doing good for each other. We want people who help others to also receive help when they need it.',
    image: image,
  },
};

const EmptyGet = ({ userType }) => {
  const { getRef } = useContext(FormContext);
  return userType === USER_TYPE.ADVISOR ? (
    <InfoBlock
      title={content[userType].title}
      text={content[userType].text}
      image={content[userType].image}
      cta={{
        text: 'Get',
        action: () => openForm(getRef),
      }}
    />
  ) : (
    <p>Regular Dashboard Placeholder...</p>
  );
};

export default EmptyGet;
