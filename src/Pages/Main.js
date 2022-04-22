import React, { useEffect, useState } from 'react';
import Router from '../Routes';
import { authService } from '../firebaseData';
import { updateProfile } from 'firebase/auth';

const Main = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const refreshUser = () => {
    setUserObj({
      displayName: userObj.displayName,
      uid: userObj.uid,
      updateProfile: args =>
        updateProfile(userObj, { displayName: userObj.displayName }),
    });
  };

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserObj(user);
      } else {
        setInit(null);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <Router
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        'Initializing...'
      )}
    </>
  );
};

export default Main;
