import React, { useContext } from 'react';
import { UserContext } from '../../utils/context/UserContextProvider';
import { Link } from 'react-router-dom';

const Listing = () => {
  const { name, clientResponses, expertResponses } = useContext(UserContext);

  return (
    <div>
      <h1>Hello {name}</h1>
      <div>Here are all your requests for support:</div>
      <ul>
        {clientResponses.map((response) => (
          <li key={response['ID']}>
            <Link to={`/user/${response['ID']}`}>{response['Challenge']}</Link>
          </li>
        ))}
      </ul>
      <div>Here are all your expert responses:</div>
      <ul>
        {expertResponses.map((response) => (
          <li key={response['ID']}>
            <Link to={`/expert/${response['ID']}`}>
              {response['Challenges']}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
