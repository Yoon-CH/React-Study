import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ReactBasicStudy from './Pages/ReactBasicStudy';
import ReactHookStudy from './Pages/ReactHookStudy';
import ReactTwitter from './Pages/ReactTwitter';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Basic" element={<ReactBasicStudy />} />
        <Route path="/Hooks" element={<ReactHookStudy />} />
        <Route path="/Twitter" element={<ReactTwitter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
