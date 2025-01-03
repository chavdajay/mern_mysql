import React from "react";
import { deleteTask, updateTask } from "../api";

function TaskList({ tasks, onTaskDeleted, onTaskUpdated }) {
    const handleDelete = async (id) => {
        await deleteTask(id);
        onTaskDeleted(id);
    };

    const handleToggle = async (task) => {
        const updatedTask = { ...task, completed: !task.completed };
        await updateTask(task.id, updatedTask);
        onTaskUpdated(updatedTask);
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.title}: {task.description}
                    </span>
                    <button onClick={() => handleToggle(task)}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
