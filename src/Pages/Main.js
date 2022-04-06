import React, { useEffect, useState } from 'react';
import Router from '../Routes';
import { authService } from '../firebaseData';

const Main = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return <>{init ? <Router isLoggedIn={isLoggedIn} /> : 'Initializing...'}</>;
};

export default Main;
