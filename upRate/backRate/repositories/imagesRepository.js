const db = require('../dbSetup/database');

async function getFrontPageImageById(id) {
    console.log(id);
    const [rows] = await db.query(`SELECT header_image_link FROM restaurants WHERE name = ?`, [id]);
    console.log(rows);
    if (rows.length) {
        return rows[0].header_image_link;
    }
    return null;
}

async function getLogoImageById(id) {
    const [rows] = await db.query(`SELECT logo_image_link FROM restaurants WHERE name = ?`, [id]);
    console.log(rows);
    if (rows.length) {
        return rows[0].logo_image_link;
    }
    return null;
}

module.exports = {
    getFrontPageImageById,
    getLogoImageById
};
