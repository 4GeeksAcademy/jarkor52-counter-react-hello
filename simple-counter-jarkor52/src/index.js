import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './components/SecondsCounter';

const updateInterval = 1000; 

function renderSecondsCounter() {
  const seconds = Math.floor((Date.now() - window.performance.timing.navigationStart) / 1000);

  ReactDOM.render(<SecondsCounter seconds={seconds} />, document.getElementById('root'));
}


renderSecondsCounter();

setInterval(renderSecondsCounter, updateInterval);
