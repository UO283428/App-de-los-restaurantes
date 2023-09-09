const db = require('../dbSetup/database');

async function getFrontPageImageByRestaurantId(restaurant_id) {

    const [rows] = await db.query(`SELECT header_image_link FROM restaurants WHERE restaurant_id = ?`, [restaurant_id]);
    if (rows.length) {
        return rows[0].header_image_link;
    }
    return null;
}

async function getLogoImageByRestaurantId(restaurant_id) {
    
    const [rows] = await db.query(`SELECT logo_image_link FROM restaurants WHERE restaurant_id = ?`, [restaurant_id]);
    if (rows.length) {
        return rows[0].logo_image_link;
    }
    return null;
}

async function getFrontPageImageByRestaurantName(restaurant_name) {

    const [rows] = await db.query(`SELECT header_image_link FROM restaurants WHERE restaurant_name = ?`, [restaurant_name]);
    if (rows.length) {
        return rows[0].header_image_link;
    }
    return null;
}

async function getLogoImageByRestaurantName(restaurant_name) {
    
    const [rows] = await db.query(`SELECT logo_image_link FROM restaurants WHERE restaurant_name = ?`, [restaurant_name]);
    if (rows.length) {
        return rows[0].logo_image_link;
    }
    return null;
}

module.exports = {
    getFrontPageImageByRestaurantId,
    getLogoImageByRestaurantId,
    getFrontPageImageByRestaurantName,
    getLogoImageByRestaurantName
};
