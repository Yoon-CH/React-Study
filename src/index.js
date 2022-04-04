import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Pages/Main';
import firebase from './firebaseData';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
