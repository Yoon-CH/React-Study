import React, { useState, useEffect } from 'react';
import { dbService } from '../../firebaseData';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import Navigation from './Navigation';

const TwitterHome = isLoggedIn => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, 'nweets'), {
        nweet,
        createdAt: Date.now(),
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

  const getNweets = async () => {
    const q = query(collection(dbService, 'nweets'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const nweetObj = {
        ...doc.data(),
        id: doc.id,
      };
      setNweets(prev => [nweetObj, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
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
        {nweets.map(data => (
          <div key={data.id}>
            <h4>{data.nweet}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default TwitterHome;
