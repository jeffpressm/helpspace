import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import { HELP_TYPE } from 'lib/help';

import EmptyGet from './Empty/EmptyGet';
import EmptyGive from './Empty/EmptyGive';

const Dashboard = () => {
  const { responses } = useContext(SpreadsheetContext);
  // type will either be 'give' or 'get'
  const { type } = useParams();
  // http://localhost:3000/dashboard/get?email=test@example.com&type=advisor
  const query = useSearchParams();
  const email = query?.get('email');
  const userType = query?.get('type');

  const user = getUserInfo(responses, email);

  // If user has no clientResponses show "empty" state on "get" (figma screen #665)
  // If user has no expertResponses show "empty" state on "give" (figma screen #663)
  // If user has experResponses but no matches (we do not have a way to show matches yet) show "waiting" state on give (firgma screen #617)

  return type === HELP_TYPE.GET ? (
    <EmptyGet userType={userType} />
  ) : (
    <EmptyGive userType={userType} />
  );
};

export default Dashboard;
