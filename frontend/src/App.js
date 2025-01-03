import React, { useState, useEffect } from "react";
import { getTasks } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks();
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleTaskDeleted = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleTaskUpdated = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList
                tasks={tasks}
                onTaskDeleted={handleTaskDeleted}
                onTaskUpdated={handleTaskUpdated}
            />
        </div>
    );
}

export default App;
