const db = require("../config/db");

// Get all tasks
exports.getTasks = (req, res) => {
    const query = "SELECT * FROM tasks";
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Add a new task
exports.addTask = (req, res) => {
    const { title, description } = req.body;
    const query = "INSERT INTO tasks (title, description) VALUES (?, ?)";
    db.query(query, [title, description], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, title, description, completed: false });
    });
};

// Update a task
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const query = "UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?";
    db.query(query, [title, description, completed, id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Task updated successfully" });
    });
};

// Delete a task
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM tasks WHERE id = ?";
    db.query(query, [id], (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Task deleted successfully" });
    });
};
