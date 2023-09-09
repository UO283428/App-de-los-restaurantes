const db = require('../dbSetup/database');

// Save a rating for a given questionId
async function saveRating(questionId, rating) {
    const sql = 'INSERT INTO question_ratings (question_id, rating_value, rating_date) VALUES (?, ?, ?)';
    const ratingDate = new Date().toISOString().split('T')[0]; // Getting current date in YYYY-MM-DD format
    const [results] = await db.query(sql, [questionId, rating, ratingDate]);
    return results.insertId;  // Return the ID of the inserted record
}

module.exports = {
    saveRating
};
