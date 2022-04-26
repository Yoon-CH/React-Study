import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TwitterAuth from './Components/ReactTwitter/TwitterAuth';
import TwitterHome from './Components/ReactTwitter/TwitterHome';
import ReactBasicStudy from './Pages/ReactBasicStudy';
import ReactHookStudy from './Pages/ReactHookStudy';
import Profile from './Components/ReactTwitter/Profile';
import ReactContact from './Pages/ReactContact';

function Router({ refreshUser, isLoggedIn, userObj }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Basic" element={<ReactBasicStudy />} />
        <Route path="/Hooks" element={<ReactHookStudy />} />
        {isLoggedIn ? (
          <>
            <Route
              path="/Twitter"
              element={
                <TwitterHome isLoggedIn={isLoggedIn} userObj={userObj} />
              }
            />
            <Route
              path="/Twitter/Profile"
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  userObj={userObj}
                  refreshUser={refreshUser}
                />
              }
            />
          </>
        ) : (
          <Route path="/Twitter" element={<TwitterAuth />} />
        )}
        <Route path="/Contact" element={<ReactContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
