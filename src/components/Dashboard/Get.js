import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';

import Match from './Match/Match';
import Waiting from './Waiting';
import { FormContext, openForm } from 'utils/context/Form';
import { matchStatusType } from 'lib/status';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const GetHelp = ({ user }) => {
  const { getRef } = useContext(FormContext);

  return (
    <ContentBox isTop>
      <article className={cx('root')}>
        <div className={cx('add-request-container')}>
          <button
            className={cx('add-request')}
            onClick={() => openForm(getRef)}
          >
            +
          </button>
        </div>
        <div className={cx('requests-container')}>
          {user.clientResponses.map((response) => {
            const notMatched = response['Status'] === matchStatusType.waiting;

            if (notMatched) {
              return (
                <Waiting key={response.ID} response={response} user={user} />
              );
            }
            return <Match key={response.ID} user={user} match={response} />;
          })}
        </div>
      </article>
    </ContentBox>
  );
};

export default GetHelp;
