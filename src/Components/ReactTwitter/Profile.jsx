import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../firebaseData';

const Profile = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate('/Twitter');
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
