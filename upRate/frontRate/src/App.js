import './App.css';
import {useState, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import { HeaderContext } from './HeaderContext';
import MainLayout from './main-rating/layouts/MainLayout';
import LowRatingPage from './main-rating/pages/LowRatingPage';
import { URLS, URLSREL } from './main-rating/constants/urls';


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
const HighRatingPage = lazy(() => import('./main-rating/pages/HighRatingPage'));
const FeedbackPage = lazy(() => import('./main-rating/pages/FeedbackPage'));
//export const HeaderContext = createContext();

function App() {

  const [user, setUser] = useState({});


  const [isHeaderAnimated, setHeaderAnimated] = useState(false);
  const [isHeaderExtended, setHeaderExtended] = useState(false);


  return (
    <HeaderContext.Provider value={{ isHeaderAnimated, setHeaderAnimated, isHeaderExtended, setHeaderExtended }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={URLS.RATING} element={<MainLayout />} >
                <Route index element={<RatingPage />} />
                <Route path={URLSREL.LOW_RATING} element={<LowRatingPage />} />
                <Route path={URLSREL.HIGH_RATING} element={<HighRatingPage />} />
                <Route path={URLSREL.FEEDBACK} element={<FeedbackPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </UserContext.Provider>
    </HeaderContext.Provider>
  );
}

export default App;