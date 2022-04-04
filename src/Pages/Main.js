import React, { useState } from 'react';
import Router from '../Routes';
import { authService } from '../firebaseData';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Main;
