const db = require('../dbSetup/database');

// Fetch questions by a given restaurant's ID
async function getQuestionsByRestaurantId(restaurant_id) {
    const [rows] = await db.query(`SELECT question_id, question_text FROM questions WHERE restaurant_id = ?`, [restaurant_id]);
    return rows.length ? rows.map(row => ({ question_id: row.question_id, question_text: row.question_text })) : null;
}

// Fetch questions by a given restaurant's name
async function getQuestionsByRestaurantName(restaurant_name) {
    const [rows] = await db.query(`SELECT question_id, question_text FROM questions WHERE restaurant_id = (SELECT restaurant_id FROM restaurants WHERE restaurant_name = ?)`, [restaurant_name]);
    return rows.length ? rows.map(row => ({ question_id: row.question_id, question_text: row.question_text })) : null;
}

// Fetch a question by its ID
async function getQuestionByQuestionId(questionId) {
    const [rows] = await db.query(`SELECT * FROM questions WHERE question_id = ?`, [questionId]);
    return rows.length ? rows[0] : null;
}

// Update the average rating for a question by its ID
async function updateRatingByQuestionId(questionId, newRating, ratingCounter) {
    const sql = 'UPDATE questions SET average_rating = ?, number_of_ratings = ? WHERE question_id = ?';
    const [results] = await db.query(sql, [newRating, ratingCounter, questionId]);
    return results.affectedRows;
}

module.exports = {
    getQuestionsByRestaurantId,
    getQuestionsByRestaurantName,
    getQuestionByQuestionId,
    updateRatingByQuestionId
};
