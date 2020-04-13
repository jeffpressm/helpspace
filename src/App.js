import React from 'react';
import logo from './logo.svg';
import './App.scss';
import useTabletop from './utils/hooks/useTabletop';

function App() {
  const tData = useTabletop('1d0YOkDB61twU6LWST53gtRfwvDVjze4hUAWXJOvgiyg');

  console.log(tData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
