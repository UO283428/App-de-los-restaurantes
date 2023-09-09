const express = require('express');
const router = express.Router();
const questionsRepository = require('../../repositories/questionRepository');

// define routes for delivering images
router.get('/api/restaurant-questions', async (req, res) => {
    const { id: restaurant_id } = req.query;
    // logic for delivering front page image with given id
    // for now, just return the default URL
    const questionsSet = await questionsRepository.getQuestionsByRestaurantName(restaurant_id);
    res.send({ questionsSet });
});

module.exports = router;