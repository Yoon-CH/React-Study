import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ReactBasicStudy from './Pages/ReactBasicStudy';
import ReactHookStudy from './Pages/ReactHookStudy';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Basic" element={<ReactBasicStudy />} />
        <Route path="/Hooks" element={<ReactHookStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
