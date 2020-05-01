import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SubNav } from 'components/GlobalNav/AccountNav/Dashboard';
import { HELP_TYPE } from 'lib/help';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';
import { pivotTable } from 'utils/pivotTable';

import styles from './Dashboard.module.scss';
import EmptyGet from './Empty/EmptyGet';
import EmptyGive from './Empty/EmptyGive';

const cx = classNames.bind(styles);

const Dashboard = () => {
  const { content, responses } = useContext(SpreadsheetContext);
  const DashboardContent = pivotTable(content['Dashboard']);
  // type will either be 'give' or 'get'
  const { type } = useParams();
  // http://localhost:3000/dashboard/get?email=test@example.com
  const query = useSearchParams();
  const email = query?.get('email');

  const { clientResponses, advisorResponses } = getUserInfo(responses, email);

  const getPageBody = () => {
    if (type === HELP_TYPE.GET) {
      if (!clientResponses.length) {
        return <EmptyGet />;
      } else {
        return <div>Get Dashboard</div>;
      }
    } else if (type === HELP_TYPE.GIVE) {
      if (!advisorResponses.length) {
        return <EmptyGive />;
      } else {
        return <div>Give Dashboard</div>;
      }
    }
  };

  // If user has no clientResponses show "empty" state on "get" (figma screen #665)
  // If user has no advisorResponses show "empty" state on "give" (figma screen #663)
  // If user has advisorResponses but no matches (we do not have a way to show matches yet) show "waiting" state on give (figma screen #617)

  return (
    <div>
      <nav className={cx('nav')}>
        <SubNav />
      </nav>
      {getPageBody()}
    </div>
  );
};

export default Dashboard;
