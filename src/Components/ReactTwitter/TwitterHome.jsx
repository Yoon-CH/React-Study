import React, { useState, useEffect } from 'react';
import { dbService } from '../../firebaseData';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import Navigation from './Navigation';
import Nweet from './Nweet';

const TwitterHome = ({ isLoggedIn, userObj }) => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, 'nweets'), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    setNweet('');
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  useEffect(() => {
    const q = query(
      collection(dbService, 'nweets'),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(q, snapshot => {
      const nweetArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  return (
    <>
      {isLoggedIn && <Navigation />}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={nweet}
          onChange={onChange}
          placeholder="What's on Your Mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map(nweet => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default TwitterHome;
