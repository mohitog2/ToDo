import React, { useState } from "react";
import "./App.css";

function Todoapp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a new task!");
      return;
    }

    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <div className="input-section">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="tasklist">
          {tasks.map((task, index) => (
            <>
              <li key={index} className={task.completed ? "completed" : ""}>
                <span onClick={() => toggleComplete(index)}>{task.text}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  X
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todoapp;
