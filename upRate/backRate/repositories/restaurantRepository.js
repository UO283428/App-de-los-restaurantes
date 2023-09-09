const db = require('../dbSetup/database');

// Fetch a restaurant by its ID
async function getRestaurantByRestaurantId(restaurant_id) {
    const sql = 'SELECT * FROM restaurants WHERE restaurant_id = ?';
    const [results] = await db.query(sql, [restaurant_id]);
    return results[0];  // Assuming IDs are unique, so we only need the first result
}

// Fetch a restaurant by its name
async function getRestaurantByRestaurantName(restaurant_name) {
    const sql = 'SELECT * FROM restaurants WHERE restaurant_name = ?';
    const [results] = await db.query(sql, [restaurant_name]);
    return results[0];  // Assuming names are unique, so we only need the first result
}

// Update the average rating for a restaurant by its ID
async function updateRatingByRestaurantId(restaurantId, newRating) {
    const sql = 'UPDATE restaurants SET average_rating = ? WHERE restaurant_id = ?';
    const [results] = await db.query(sql, [newRating, restaurantId]);
    return results.affectedRows;  // Return the number of affected rows
}

// Update the rating counter for a restaurant by its ID
async function updateRatingCounterByRestaurantId(restaurantId, ratingCounter) {
    const sql = 'UPDATE restaurants SET number_of_ratings = ? WHERE restaurant_id = ?';
    const [results] = await db.query(sql, [ratingCounter, restaurantId]);
    return results.affectedRows;  // Return the number of affected rows
}

module.exports = {
    getRestaurantByRestaurantName,
    getRestaurantByRestaurantId,
    updateRatingByRestaurantId,
    updateRatingCounterByRestaurantId
};
