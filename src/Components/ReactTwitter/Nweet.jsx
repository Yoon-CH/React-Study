import React, { useState } from 'react';
import { dbService, storageService } from '../../firebaseData';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import styled from 'styled-components';

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const NweetTextRef = doc(dbService, 'nweets', `${nweetObj.id}`);

  const onDeleteClick = async () => {
    const deleteData = window.confirm('정말로 Nweet를 삭제하시겠습니까?');
    if (deleteData) {
      await deleteDoc(NweetTextRef);
      await deleteObject(ref(storageService, nweetObj.imageFileURL));
    }
  };

  const toggleEditing = () => {
    setEditing(prev => !prev);
  };

  const onSubmit = async event => {
    event.preventDefault();
    await updateDoc(NweetTextRef, {
      text: newNweet,
    });
    setEditing(false);
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Edit your Nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <Input type="submit" value="Update Nweet" />
            <button onClick={toggleEditing}>Cancel</button>
          </Form>
        </>
      ) : (
        <EditForm>
          <h4>{nweetObj.text}</h4>
          {nweetObj.imageFileURL && (
            <Image src={nweetObj.imageFileURL} alt="nweetImage" />
          )}
          {isOwner && (
            <>
              <Button onClick={onDeleteClick}>Delete Nweet</Button>
              <Button onClick={toggleEditing}>Edit Nweet</Button>
            </>
          )}
        </EditForm>
      )}
    </div>
  );
};

export default Nweet;

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

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Button = styled.button`
  margin: 10px;
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;
