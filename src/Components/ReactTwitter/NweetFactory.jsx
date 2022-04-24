import React, { useState } from 'react';
import { dbService, storageService } from '../../firebaseData';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState('');
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

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        value={nweet}
        onChange={onChange}
        placeholder="What's on Your Mind?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <Input type="submit" value="Nweet" />
      {imageFile && (
        <div>
          <img src={imageFile} alt="미리보기" width="50px" height="50px" />
          <button onClick={onClearPhoto}>Clear</button>
        </div>
      )}
    </Form>
  );
};

export default NweetFactory;

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
