const express = require('express');
const router = express.Router();

// Json with the questions. The first one is service, the second one is food and the third one is place.
// They have an id and content.
const questions = {
    questions: [
        {
            id: 1,
            content: "¿Cómo calificarías el servicio?"
        },
        {
            id: 2,
            content: "¿Cómo calificarías la comida?"
        },
        {
            id: 3,
            content: "¿Cómo calificarías el local?"
        }
    ]
};

// define routes for delivering images
router.get('/api/restaurant-questions', (req, res) => {
    const { id } = req.query;
    // logic for delivering front page image with given id
    // for now, just return the default URL
    res.send({ questions: questions.questions });
});

module.exports = router;