// urls.js
// This file contains the urls for the different pages in the webApp. It is used to navigate
export const URLS = {
  RATING: ":id",
  HIGH_FEEDBACK: ":id/high-feedback",
  LOW_RATING: ":id/low-rating",
  LOW_FEEDBACK: ":id/low-feedback",
  LOW_THANX: ":id/low-thanx",
};

// This file contains the urls for the different pages in the webApp. It is used to navigate
export const URLSNAV = {
    RATING: id => "/" + URLS.RATING.replace(":id", id),
    HIGH_FEEDBACK: id => "/" + URLS.HIGH_FEEDBACK.replace(":id", id),
    LOW_RATING: id => "/" + URLS.LOW_RATING.replace(":id", id),
    LOW_FEEDBACK: id => "/" + URLS.LOW_FEEDBACK.replace(":id", id),
    LOW_THANX: id => "/" + URLS.LOW_THANX.replace(":id", id),
  };

// This file contains the urls for the different pages in the webApp using relative ones
export const URLSREL = {
    RATING: "/",
    HIGH_FEEDBACK: URLS.HIGH_FEEDBACK.split("/")[1], //high-feedback
    LOW_RATING: URLS.LOW_RATING.split("/")[1], //low-rating
    LOW_FEEDBACK: URLS.LOW_FEEDBACK.split("/")[1], //low-feedback
    LOW_THANX: URLS.LOW_THANX.split("/")[1], //low-thanx
  };
