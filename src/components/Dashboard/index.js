import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { SubNav } from 'components/GlobalNav/AccountNav/Dashboard';
import { HELP_TYPE } from 'lib/help';
import useSearchParams from 'utils/hooks/useSearchParams';
import useUser from 'utils/hooks/useUser';

import styles from './Dashboard.module.scss';
import EmptyGet from './Empty/EmptyGet';
import EmptyGive from './Empty/EmptyGive';
import GetHelp from './Get';
import GiveHelp from './Give';

const cx = classNames.bind(styles);

const Dashboard = () => {
  const { type } = useParams();
  const query = useSearchParams();
  const qEmail = query?.get('email');
  const sEmail = window.localStorage.getItem('email');
  const [user] = useUser(qEmail || sEmail);

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
        return <GiveHelp user={user} />;
      }
    }
  };

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
