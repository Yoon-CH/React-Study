import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({ userObj }) => {
  return (
    <>
      <ui>
        <NavigationBox>
          <Link to="/Twitter">Home</Link>
        </NavigationBox>
        <NavigationBox>
          <Link to="/Twitter/Profile">{userObj.displayName} Profile</Link>
        </NavigationBox>
      </ui>
    </>
  );
};

export default Navigation;

const NavigationBox = styled.li`
  float: left;
  list-style: none;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 50px;
`;
