import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ userObj }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/Twitter">Home</Link>
        </li>
        <li>
          <Link to="/Twitter/Profile">{userObj.displayName} Profile</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
