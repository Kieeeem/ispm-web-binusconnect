import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventListPage from './Pages/EventListPage';
import BinusConnect from './Pages/BinusConnect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BinusConnect />} />
        <Route path="/event-list" element={<EventListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
