import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from 'components/App';

import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-165739132-1', {
  debug: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
