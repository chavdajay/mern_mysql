require("dotenv").config(); // Load environment variables

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const { createTaskTable } = require("./models/TaskModel"); // Import table creation

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/tasks", taskRoutes);


// Ensure table exists
createTaskTable(); // Create 'tasks' table on server startup

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
