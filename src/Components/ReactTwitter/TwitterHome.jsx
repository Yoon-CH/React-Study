import React, { useState, useEffect } from 'react';
import { dbService, storageService } from '../../firebaseData';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import Navigation from './Navigation';
import Nweet from './Nweet';
import { v4 as uuidv4 } from 'uuid';

const TwitterHome = ({ isLoggedIn, userObj }) => {
  const [nweet, setNweet] = useState('');
  const [nweets, setNweets] = useState([]);
  const [imageFile, setImageFile] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    let imageFileURL = '';
    if (imageFile !== '') {
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const uploadFile = await uploadString(fileRef, imageFile, 'data_url');
      imageFileURL = await getDownloadURL(uploadFile.ref);
      const nweetPosting = {
        nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        imageFileURL,
      };
      await addDoc(collection(dbService, 'nweets'), nweetPosting);
      setNweet('');
      setImageFile('');
    }
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = event => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImageFile(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearPhoto = () => {
    setImageFile(null);
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
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {imageFile && (
          <div>
            <img src={imageFile} alt="미리보기" width="50px" height="50px" />
            <button onClick={onClearPhoto}>Clear</button>
          </div>
        )}
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
