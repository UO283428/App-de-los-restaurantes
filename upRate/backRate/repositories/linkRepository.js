const db = require('../dbSetup/database');

async function getLinksByRestaurantId(restaurant_id) {
    try {
        const [rows] = await db.query(`SELECT link_id, provider_id, full_url FROM restaurantLinks WHERE restaurant_id = ?`, [restaurant_id]);
        
        if (rows.length) {
            const links = rows.map(row => ({
                link_id: row.link_id,
                link_url: row.full_url,
                provider_id: row.provider_id,
            }));
            return links;
        }
        return null;
    } catch (err) {
        console.error("DB Query Failed: ", err);
        throw err;
    }
}

async function getLinksByRestaurantName(restaurant_name) {
    try {
        const [rows] = await db.query(`SELECT link_id, provider_id, full_url FROM restaurantLinks WHERE restaurant_id = (SELECT restaurant_id FROM restaurants WHERE restaurant_name = ?)`, [restaurant_name]);
        
        if (rows.length) {
            const links = rows.map(row => ({
                link_id: row.link_id,
                link_url: row.full_url,
                provider_id: row.provider_id,
            }));
            return links;
        }
        return null;
    } catch (err) {
        console.error("DB Query Failed: ", err);
        throw err;
    }
}

async function getProviderImageById(provider_id) {
    try {
        const [rows] = await db.query(`SELECT provider_image FROM providers WHERE provider_id = ?`, [provider_id]);
        
        if (rows.length) {
            return rows[0].provider_image;
        }
        return null;
    } catch (err) {
        console.error("DB Query Failed: ", err);
        throw err;
    }
}

module.exports = {
    getLinksByRestaurantId,
    getLinksByRestaurantName,
    getProviderImageById
};
