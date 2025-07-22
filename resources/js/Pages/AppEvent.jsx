// src/AppEvent.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventListPage from './EventListPage';

const AppEvent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventListPage />} />
      </Routes>
    </Router>
  );
};

export default AppEvent;
