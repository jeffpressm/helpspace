import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { FormContext, openForm } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import getUserInfo from 'utils/getUserInfo';
import useSearchParams from 'utils/hooks/useSearchParams';
import { pivotTable } from 'utils/pivotTable';

import styles from './Expertise.module.scss';

const cx = classNames.bind(styles);

const getChallenges = (responses) =>
  responses.reduce((acc, val) => {
    const list = val['Challenges'].split(', ');
    acc.push(...list);
    return acc;
  }, []);

const ProfileExpertise = () => {
  const { giveRef } = useContext(FormContext);
  const { content, responses } = useContext(SpreadsheetContext);
  const ProfileContent = pivotTable(content['Profile']);
  const query = useSearchParams();
  const email = query?.get('email');
  const { expertResponses } = getUserInfo(responses, email);

  const challengeList = getChallenges(expertResponses);

  const title = challengeList.length
    ? ProfileContent['Advisor Challenge Title']
    : ProfileContent['Client Challenge Title'];

  return (
    <>
      <h2 className={cx('heading')}>{title}</h2>
      <ul className={cx('challenges')}>
        {challengeList.map((challenge) => (
          <li key={challenge} className={cx('challenges__item')}>
            <div className={cx('challenge')}>{challenge}</div>
          </li>
        ))}
        <li className={cx('challenges__item')}>
          <button
            className={cx('add-challenge')}
            onClick={() => openForm(giveRef)}
          >
            +
          </button>
        </li>
      </ul>
    </>
  );
};

export default ProfileExpertise;
