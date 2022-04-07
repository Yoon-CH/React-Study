import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import TwitterAuth from './Components/ReactTwitter/TwitterAuth';
import TwitterHome from './Components/ReactTwitter/TwitterHome';
import ReactBasicStudy from './Pages/ReactBasicStudy';
import ReactHookStudy from './Pages/ReactHookStudy';
import Navigation from './Components/ReactTwitter/Navigation';
import Profile from './Components/ReactTwitter/Profile';

function Router({ isLoggedIn }) {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Basic" element={<ReactBasicStudy />} />
        <Route path="/Hooks" element={<ReactHookStudy />} />
        {isLoggedIn ? (
          <>
            <Route path="/Twitter" element={<TwitterHome />} />
            <Route path="/Twitter/Profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/Twitter" element={<TwitterAuth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
