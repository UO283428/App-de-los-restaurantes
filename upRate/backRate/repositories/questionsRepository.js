const db = require('../dbSetup/database');

async function getQuestionsById(id) {
    console.log(id);
    const [rows] = await db.query(`SELECT id, question_text FROM questions WHERE restaurant_id = (SELECT id FROM restaurants WHERE name = ?)`, [id]);
    console.log(rows);
    if (rows.length) {
        // now I have to create the set of questions from the rows
        const questions = [];
        rows.forEach((row) => {
            questions.push({
                id: row.id,
                content: row.question_text,
            });
        });
        return questions;
    }
    return null;
}

module.exports = {
    getQuestionsById,
};
