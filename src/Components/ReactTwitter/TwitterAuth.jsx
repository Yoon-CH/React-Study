import React from 'react';
import { authService } from '../../firebaseData';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AuthForm from './AuthForm';

const TwitterAuth = () => {
  const onSocialClick = async event => {
    const name = event.target.name;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <>
      <AuthForm />
      <button onClick={onSocialClick} name="google">
        Continue With Google
      </button>
    </>
  );
};

export default TwitterAuth;
