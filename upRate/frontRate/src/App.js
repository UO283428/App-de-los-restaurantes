import './App.css';
import {useState, lazy, Suspense, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import { HeaderContext } from './HeaderContext';
import MainLayout from './main-rating/layouts/MainLayout';
import LowRatingPage from './main-rating/pages/lowRating/LowRatingPage';
import LeaveFeedbackPage from './main-rating/pages/highRating/LeaveFeedbackPage';
import { URLS, URLSREL } from './main-rating/constants/urls';
import { API_URLS } from './config';

/*
import RatingPage from './main-rating/pages/RatingPage';
import LowRatingPage from './main-rating/pages/LowRatingPage.js';
import HighRatingPage from './main-rating/pages/HighRatingPage.js';
import FeedbackPage from './main-rating/pages/FeedbackPage.js';
*/

/* Not loading the whole application at once could be done with lazy loading
    but it is not working with the transitions */
const RatingPage = lazy(() => import('./main-rating/pages/RatingPage'));
//const LowRatingPage = lazy(() => import('./main-rating/pages/LowRatingPage'));
//const LeaveFeedbackPage = lazy(() => import('./main-rating/pages/highRating/LeaveFeedbackPage'));
const FeedbackPage = lazy(() => import('./main-rating/pages/lowRating/FeedbackPage'));
const ThankYouPage = lazy(() => import('./main-rating/pages/lowRating/ThankYouPage'));


function App() {

  const [lastPagePath, setLastPagePath] = useState('');
  const [jwtToken, setJwtToken] = useState('');
  const [bulkData, setBulkData] = useState({
      generalRating: 0,
      questions: [],
      finalText: ''
  });

  const [isHeaderAnimated, setHeaderAnimated] = useState(false);
  const [isHeaderExtended, setHeaderExtended] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
        try {
            const response = await fetch(API_URLS.token);
            const data = await response.json();
            setJwtToken(data.token);
        } catch (error) {
            console.error("Error fetching the token:", error);
        }
    };

    fetchToken();
  }, []);

  return (
    <HeaderContext.Provider value={{ isHeaderAnimated, setHeaderAnimated, isHeaderExtended, setHeaderExtended }}>
      <UserContext.Provider value={{ 
            lastPagePath, setLastPagePath, 
            jwtToken, setJwtToken, 
            bulkData, setBulkData
       }}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={URLS.RATING} element={<MainLayout />} >
                <Route index element={<RatingPage />} />
                <Route path={URLSREL.LOW_RATING} element={<LowRatingPage />} />
                <Route path={URLSREL.HIGH_FEEDBACK} element={<LeaveFeedbackPage />} />
                <Route path={URLSREL.LOW_FEEDBACK} element={<FeedbackPage />} />
                <Route path={URLSREL.LOW_THANX} element={<ThankYouPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </UserContext.Provider>
    </HeaderContext.Provider>
  );
}

export default App;