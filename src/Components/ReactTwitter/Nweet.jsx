import React, { useState } from 'react';
import { dbService } from '../../firebaseData';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const NweetTextRef = doc(dbService, 'nweets', `${nweetObj.id}`);

  const onDeleteClick = async () => {
    const deleteData = window.confirm('정말로 Nweet를 삭제하시겠습니까?');
    if (deleteData) {
      await deleteDoc(NweetTextRef);
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
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your Nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
