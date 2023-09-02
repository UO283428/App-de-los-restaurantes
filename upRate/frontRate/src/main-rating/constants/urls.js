// urls.js
// This file contains the urls for the different pages in the webApp. It is used to navigate
export const URLS = {
  RATING: ":id",
  HIGH_RATING: ":id/high-rating",
  LOW_RATING: ":id/low-rating",
  FEEDBACK: ":id/feedback"
};

// This file contains the urls for the different pages in the webApp. It is used to navigate
export const URLSNAV = {
    RATING: id => "/" + URLS.RATING.replace(":id", id),
    HIGH_RATING: id => "/" + URLS.HIGH_RATING.replace(":id", id),
    LOW_RATING: id => "/" + URLS.LOW_RATING.replace(":id", id),
    FEEDBACK: id => "/" + URLS.FEEDBACK.replace(":id", id)
  };

// This file contains the urls for the different pages in the webApp using relative ones
export const URLSREL = {
    RATING: "/",
    HIGH_RATING: "high-rating",
    LOW_RATING: "low-rating",
    FEEDBACK: "feedback"
  };
