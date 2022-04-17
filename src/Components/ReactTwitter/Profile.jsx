import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService, dbService } from '../../firebaseData';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { orderBy } from 'firebase/firestore';

const Profile = ({ userObj }) => {
  const navigate = useNavigate();

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

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
