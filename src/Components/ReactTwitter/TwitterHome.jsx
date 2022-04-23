import React, { useState, useEffect } from 'react';
import { dbService } from '../../firebaseData';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import Navigation from './Navigation';
import Nweet from './Nweet';
import NweetFactory from './NweetFactory';
import styled from 'styled-components';

const TwitterHome = ({ isLoggedIn, userObj }) => {
  const [nweets, setNweets] = useState([]);

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
    <HomeSection>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map(nweet => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </HomeSection>
  );
};

export default TwitterHome;

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;
