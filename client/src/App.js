import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import HealthTips from './components/HealthTips';
import Events from './components/Events';
import Resources from './components/Resources';
import GetInvolved from './components/GetInvolved';
import Testimonials from './components/Testimonials';
import News from './components/News';

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/health-tips" element={<HealthTips/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/get-involved" element={<GetInvolved/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/news" element={<News/>} />
      </Routes>
    </>
  );
};

export default App;
