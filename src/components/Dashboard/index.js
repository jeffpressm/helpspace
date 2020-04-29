import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';

import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const Dashboard = ({}) => {
  const { responses } = useContext(SpreadsheetContext);
  // type will either be 'give' or 'get'
  const { type } = useParams();
  // email param must be in URL, e.g. http://localhost:3000/dashboard/get?email=test@example.com
  const query = useSearchParams();
  const email = query?.get('email');

  const user = getUserInfo(responses, email);

  // If user has no clientResponses show "empty" state on "get" (figma screen #665)
  // If user has no expertResponses show "empty" state on "give" (figma screen #663)
  // If user has experResponses but no matches (we do not have a way to show matches yet) show "waiting" state on give (firgma screen #617)

  return <div>Dashboard</div>;
};

export default Dashboard;
