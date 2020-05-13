import React from 'react';
import { Redirect } from 'react-router-dom';

import { RouteList, UserToRoute } from 'lib/routes';

import useUser from 'utils/hooks/useUser';

const Root = () => {
  const sEmail = window.localStorage.getItem('email');
  const [user] = useUser(sEmail);
  const seenHowTo = window.localStorage.getItem('seenHowTo');

  const next = user?.advisorResponses?.length
    ? UserToRoute['advisor']
    : UserToRoute['client'];

  if (!seenHowTo) {
    return (
      <Redirect
        to={{
          pathname: RouteList.help,
          search: `?next=${next}`,
        }}
      />
    );
  }

  return <Redirect to={`${RouteList.dashboard}/${next}`} />;
};

export default Root;
