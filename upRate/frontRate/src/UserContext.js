import React from 'react';

const parts = window.location.hostname.split('.');
const subdomain = parts.length === 3 ? parts[0] : null;

export const UserContext = React.createContext({
  lastPagePath: '',
  setLastPagePath: () => {},
  jwtToken: '',
  setJwtToken: () => {},
  bulkData: {
      generalRating: 0,
      questions: [], // This will hold objects like { id: questionId, rating: someRating }
      finalText: ''
  },
  setBulkData: () => {}
});