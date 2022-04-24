import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService, dbService } from '../../firebaseData';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import Navigation from './Navigation';
import styled from 'styled-components';

const Profile = ({ refreshUser, isLoggedIn, userObj }) => {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    navigate('/Twitter');
  };

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, 'nweets'),
      where('creatorId', '==', userObj.uid),
      orderBy('createdAt')
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
    });
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
      refreshUser();
    }
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <ProfileSection>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          placeholder="Display Name"
          value={newDisplayName || ''}
        />
        <Input type="submit" value="Update Profile" />
        <button onClick={onLogOutClick}>Log Out</button>
      </Form>
    </ProfileSection>
  );
};

export default Profile;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;
