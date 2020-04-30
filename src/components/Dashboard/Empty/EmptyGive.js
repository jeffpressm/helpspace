import React from 'react';

import imageClient from 'assets/illustrations/illustration 8.png';
import imageAdvisor from 'assets/illustrations/illustration 3.png';
import InfoBlock from 'components/InfoBlock';
import { openForm } from 'utils/context/Form';
import { USER_TYPE } from 'lib/users';

const content = {
  client: {
    title: 'Find ways to return the favor.',
    text:
      'Our community relies on people’s willingness to help others. If you are receiving help, explore ways you can give back!',
    image: imageClient,
  },
  advisor: {
    title: 'We are currently looking for opportunities for you!',
    text:
      'Once we find a match, it will show up here. Meanwhile, if there is anything you need help with, you can start a challenge.',
    image: imageAdvisor,
  },
};

const EmptyGive = (props) => (
  <InfoBlock
    title={content[props.userType].title}
    text={content[props.userType].text}
    image={content[props.userType].image}
    cta={
      props.userType === USER_TYPE.CLIENT
        ? {
            text: 'Give',
            action: () => openForm(props.useRef),
          }
        : null
    }
  />
);

export default EmptyGive;
