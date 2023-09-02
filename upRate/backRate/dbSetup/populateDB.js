const fs = require('fs');
const path = require('path');
const db = require('./database');

async function populateDB() {
    // Read SQL from the file
    const filePath = path.join(__dirname, 'populateDB.sql');
    const sql = fs.readFileSync(filePath, 'utf-8');

    // Split the SQL statements into individual queries
    const statements = sql.split(';').filter(statement => !!statement.trim());

    for (const statement of statements) {
        await db.query(statement);
    }
}

module.exports = populateDB;