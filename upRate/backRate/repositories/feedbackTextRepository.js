const db = require('../dbSetup/database');

async function saveFeedbackText(finalText, restaurantId) {
    try {
        const sql = 'INSERT INTO text_feedback (restaurant_id, feedback_text, feedback_date) VALUES (?, ?, ?)';
        const feedbackDate = new Date().toISOString().split('T')[0]; // Getting current date in YYYY-MM-DD format
        const [results] = await db.query(sql, [restaurantId, finalText, feedbackDate]);
        return results.insertId;  // Return the ID of the inserted record
    } catch (error) {
        console.error(error);
        // Handle the error here
    }
}

module.exports = {
    saveFeedbackText
};