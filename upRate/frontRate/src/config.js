// src/config.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

export const API_URLS = {
  frontPageImage: id => `${API_BASE_URL}/api/front-page-image?id=${id}`,
  logoImage: id => `${API_BASE_URL}/api/logo-image?id=${id}`,
  questions: id => `${API_BASE_URL}/api/restaurant-questions?id=${id}`,
  links: id => `${API_BASE_URL}/api/restaurant-links?id=${id}`,
  token: `${API_BASE_URL}/api/generate-token`,
  // Add more API endpoints here
};