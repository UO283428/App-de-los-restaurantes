const db = require('../dbSetup/database');

async function getQuestionsByRestaurantId(restaurant_id) {
    const [rows] = await db.query(`SELECT question_id, question_text FROM questions WHERE restaurant_id = ?`, [restaurant_id]);
    if (rows.length) {
        // now I have to create the set of questions from the rows
        const questionsSet = [];
        rows.forEach((row) => {
            questionsSet.push({
                question_id: row.question_id,
                question_text: row.question_text,
            });
        });
        return questionsSet;
    }
    return null;
}

async function getQuestionsByRestaurantName(restaurant_name) {
    const [rows] = await db.query(`SELECT question_id, question_text FROM questions WHERE restaurant_id = (SELECT restaurant_id FROM restaurants WHERE restaurant_name = ?)`, [restaurant_name]);
    if (rows.length) {
        // now I have to create the set of questions from the rows
        const questionsSet = [];
        rows.forEach((row) => {
            questionsSet.push({
                question_id: row.question_id,
                question_text: row.question_text,
            });
        });
        return questionsSet;
    }
    return null;
}

module.exports = {
    getQuestionsByRestaurantId,
    getQuestionsByRestaurantName
};