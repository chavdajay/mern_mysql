const db = require("../config/db");

// Task table schema
const createTaskTable = () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

    db.query(createTableQuery, (err) => {
        if (err) {
            console.error("Failed to create 'tasks' table:", err);
        } else {
            console.log("'tasks' table ensured in the database.");
        }
    });
};

module.exports = { createTaskTable };
