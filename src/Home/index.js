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
          <Link to="/need-help">I need support</Link>
        </li>
        <li>I can help (coming soon)</li>
      </ul>
    </div>
  );
}

export default Home;
