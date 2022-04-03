import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import firebase from './firebase';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
