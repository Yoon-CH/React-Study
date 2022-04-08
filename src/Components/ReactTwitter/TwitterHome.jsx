import React, { useState } from 'react';
import { dbService } from '../../firebaseData';
import { addDoc, collection } from 'firebase/firestore';

const TwitterHome = () => {
  const [nweet, setNweet] = useState('');

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

  return (
    <>
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
    </>
  );
};

export default TwitterHome;
