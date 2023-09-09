const questionRatingRepository = require('../repositories/questionRatingRepository.js');
const feedbackTextRepository = require('../repositories/feedbackTextRepository.js');
const restaurantRepository = require('../repositories/restaurantRepository.js');
const generalRatingRepository = require('../repositories/generalRatingRepository.js');
const questionRepository = require('../repositories/questionRepository.js');

async function saveBulkData(bulkdata, restaurantName) {
    const { generalRating, questions, finalText, lastPage } = bulkdata;

    if (generalRating) {
        addAndUpdateRating(generalRating, restaurantName);
    }

    if (questions) {
        questions.forEach((question) => {
            const { questionId, rating } = question;
            addAndUpdateQuestionRating(questionId, rating, restaurantName);
        });
    }

    if (finalText) {
        const restaurant = await restaurantRepository.getRestaurantByRestaurantName(restaurantName);
        const restaurantId = restaurant.restaurant_id;
        const id = await feedbackTextRepository.saveFeedbackText(finalText, restaurantId);
    }
}

async function addAndUpdateQuestionRating(questionId, rating) {
    questionRatingRepository.saveRating(questionId, rating);
    const question = await questionRepository.getQuestionByQuestionId(questionId);
    const previousRating = question.average_rating;
    const ratingCounter = question.number_of_ratings;
    const newRating = (previousRating * ratingCounter + rating) / (ratingCounter + 1);
    questionRepository.updateRatingByQuestionId(questionId, newRating, ratingCounter + 1);
}

async function addAndUpdateRating(generalRating, restaurantName) {
    const restaurant = await restaurantRepository.getRestaurantByRestaurantName(restaurantName);
    const previousRating = restaurant.average_rating;
    const ratingCounter = restaurant.number_of_ratings;
    const newRating = (previousRating * ratingCounter + generalRating) / (ratingCounter + 1);
    restaurantRepository.updateRatingByRestaurantId(restaurant.restaurant_id, newRating);
    restaurantRepository.updateRatingCounterByRestaurantId(restaurant.restaurant_id, ratingCounter + 1);

    generalRatingRepository.saveGeneralRating(generalRating, restaurant.restaurant_id);
}

module.exports = { 
    saveBulkData 
};
