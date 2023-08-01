import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import RatingPage from './main-rating/pages/RatingPage';
import LowRatingPage from './main-rating/pages/LowRatingPage';
import HighRatingPage from './main-rating/pages/HighRatingPage';
import FeedbackPage from './main-rating/pages/FeedbackPage';

function App() {

  const [user, setUser] = React.useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<RatingPage />} />
          <Route path="/low-rating" element={<LowRatingPage />} />
          <Route path="/high-rating" element={<HighRatingPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
