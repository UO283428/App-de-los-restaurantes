const express = require('express');
const router = express.Router();
const questionsRepository = require('../../repositories/questionsRepository');

// define routes for delivering images
router.get('/api/restaurant-questions', async (req, res) => {
    const { id } = req.query;
    // logic for delivering front page image with given id
    // for now, just return the default URL
    const questions = await questionsRepository.getQuestionsById(id);
    res.send({ questions });
});


module.exports = router;