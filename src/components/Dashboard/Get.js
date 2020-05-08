import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import ContentBox from 'components/layout/ContentBox';

import Match from './Match/Match';
import Waiting from './Waiting';
import { FormContext } from 'utils/context/Form';
import { matchStatusType } from 'lib/status';

import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const GetHelp = ({ user }) => {
  const { openForm } = useContext(FormContext);

  return (
    <ContentBox isTop>
      <article className={cx('root')}>
        <div className={cx('add-request-container')}>
          <button className={cx('add-request')} onClick={() => openForm('get')}>
            +
          </button>
        </div>
        <div className={cx('requests-container')}>
          {user.clientResponses.map((response) => {
            const notMatched = response['Status'] === matchStatusType.waiting;

            if (notMatched) {
              return (
                <section key={response.ID} className={cx('request')}>
                  <Waiting response={response} user={user} />
                </section>
              );
            }
            return (
              <section key={response.ID} className={cx('request')}>
                <Match user={user} match={response} />
              </section>
            );
          })}
        </div>
      </article>
    </ContentBox>
  );
};

export default GetHelp;
