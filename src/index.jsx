import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { PlannerProvider } from './context/PlannerContext';

render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
