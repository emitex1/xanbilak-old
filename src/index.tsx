import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./i18nextInit";
import './index.css';

ReactDOM.render(
  <Suspense fallback="...">
    <App />
  </Suspense>,
  document.getElementById('root')
)
