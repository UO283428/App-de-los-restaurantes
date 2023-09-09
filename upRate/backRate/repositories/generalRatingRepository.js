const db = require('../dbSetup/database');

// Save a general rating for a given restaurantId
async function saveGeneralRating(generalRating, restaurantId) {
    const sql = 'INSERT INTO general_ratings (restaurant_id, rating_value, rating_date) VALUES (?, ?, ?)';
    const ratingDate = new Date().toISOString().split('T')[0]; // Getting current date in YYYY-MM-DD format
    const [results] = await db.query(sql, [restaurantId, generalRating, ratingDate]);
    return results.insertId;  // Return the ID of the inserted record
}

module.exports = {
    saveGeneralRating
};