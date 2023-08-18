import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import MainLayout from './main-rating/layouts/MainLayout';
import { URLS } from './main-rating/constants/urls';

import RatingPage from './main-rating/pages/RatingPage';
import LowRatingPage from './main-rating/pages/LowRatingPage.js';
import HighRatingPage from './main-rating/pages/HighRatingPage.js';
import FeedbackPage from './main-rating/pages/FeedbackPage.js';

/*const RatingPage = lazy(() => import('./main-rating/pages/RatingPage'));
const LowRatingPage = lazy(() => import('./main-rating/pages/LowRatingPage'));
const HighRatingPage = lazy(() => import('./main-rating/pages/HighRatingPage'));
const FeedbackPage = lazy(() => import('./main-rating/pages/FeedbackPage'));*/

function App() {

  const [user, setUser] = React.useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
          <Routes>
            <Route path={URLS.RATING} element={<MainLayout><RatingPage /></MainLayout>} />
            <Route path={URLS.LOW_RATING} element={<MainLayout><LowRatingPage /></MainLayout>} />
            <Route path={URLS.HIGH_RATING} element={<MainLayout><HighRatingPage /></MainLayout>} />
            <Route path={URLS.FEEDBACK} element={<MainLayout><FeedbackPage /></MainLayout>} />
          </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;