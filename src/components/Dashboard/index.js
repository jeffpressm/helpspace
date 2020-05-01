import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SubNav } from 'components/GlobalNav/AccountNav/Dashboard';
import { HELP_TYPE } from 'lib/help';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { UserContext } from 'utils/context/UserContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';

import styles from './Dashboard.module.scss';
import EmptyGet from './Empty/EmptyGet';
import EmptyGive from './Empty/EmptyGive';
import GetHelp from './Get';

const cx = classNames.bind(styles);

const Dashboard = () => {
  const [user, setUser] = useState();
  const userData = useContext(UserContext);
  const { responses } = useContext(SpreadsheetContext);
  const query = useSearchParams();
  const qEmail = query?.get('email');
  const { type } = useParams();

  useEffect(() => {
    if (qEmail) {
      setUser(getUserInfo(responses, qEmail));
      return;
    }

    setUser(userData);
  }, [qEmail, responses, setUser, userData]);

  if (!user) {
    return null;
  }

  const getPageBody = () => {
    if (type === HELP_TYPE.GET) {
      if (!user.clientResponses.length) {
        return <EmptyGet />;
      } else {
        return <GetHelp user={user} />;
      }
    } else if (type === HELP_TYPE.GIVE) {
      if (!user.advisorResponses.length) {
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
