import React, { useState } from 'react';
import { authService } from '../../firebaseData';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import styled from 'styled-components';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount(prev => !prev);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={onChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={onChange}
      />
      <Input type="submit" value={newAccount ? 'Create Account' : 'Sign In'} />
      {error}
      <Span onClick={toggleAccount}>
        {newAccount ? 'Sign In' : 'Create Account'}
      </Span>
    </Form>
  );
};

export default AuthForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

const Span = styled.span`
  margin-bottom: 20px;
  cursor: pointer;
`;
