import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      Welcome to Guild
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
