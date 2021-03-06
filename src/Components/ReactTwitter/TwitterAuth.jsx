import React from 'react';
import { authService } from '../../firebaseData';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AuthForm from './AuthForm';
import styled from 'styled-components';

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
    <AuthSection>
      <AuthForm />
      <Button onClick={onSocialClick} name="google">
        ☛ Continue With Google
      </Button>
    </AuthSection>
  );
};

export default TwitterAuth;

const AuthSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;
