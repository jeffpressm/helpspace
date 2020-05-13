import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import { FormContext } from 'utils/context/Form';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

import styles from './Expertise.module.scss';

const cx = classNames.bind(styles);

const getChallenges = (responses) =>
  responses.reduce((acc, val) => {
    const list = val['Challenges'].split(', ');
    acc.push(...list);
    return acc;
  }, []);

const ProfileExpertise = ({ user }) => {
  const { openForm } = useContext(FormContext);
  const [content] = useSpreadsheet(CMS_URL['Profile']);
  const ProfileContent = pivotTable(content);

  const challengeList = getChallenges(user.advisorResponses);

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
            onClick={() => openForm('give')}
          >
            +
          </button>
        </li>
      </ul>
    </>
  );
};

export default ProfileExpertise;
