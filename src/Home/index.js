import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../utils/context/UserContextProvider';

function Home() {
  const userData = useContext(UserContext);
  const { Name: name } = userData;

  return (
    <div>
      <p>Welcome to Guild, {name || 'stranger'}</p>
      <br />
      <ul>
        <li>
          <Link to="/get-help">Get help</Link>
        </li>
        <Link to="/give-help">Give help</Link>
      </ul>
    </div>
  );
}

export default Home;
