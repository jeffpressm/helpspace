import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { RouteList, UserToRoute } from 'lib/routes';

import { UserContext } from 'utils/context/UserContextProvider';

const Root = () => {
  const userData = useContext(UserContext);
  const seenHowTo = window.localStorage.getItem('seenHowTo');

  const next = userData?.advisorResponses?.length
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
