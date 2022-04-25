import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TwitterAuth from './Components/ReactTwitter/TwitterAuth';
import TwitterHome from './Components/ReactTwitter/TwitterHome';
import ReactBasicStudy from './Pages/ReactBasicStudy';
import ReactHookStudy from './Pages/ReactHookStudy';
import Profile from './Components/ReactTwitter/Profile';
import ReactMovie from './Pages/ReactMovie';
import MovieDetail from './Components/ReactMovie/MovieDetail';

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
        <Route path="/Movie" element={<ReactMovie />} />
        <Route path="/Movie:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
