import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const trimmedTask = newTask.trim();
    if (!trimmedTask) {
      alert("Enter a task.");
      return;
    }
    setTasks((t) => [...t, trimmedTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    const updatedTask = prompt("Update Task:", tasks[index]);
    if (!updatedTask) {
      alert("Enter a task please");
      return;
    }
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className="todo-list">
      <h1>To-Do-List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>
      {tasks.map((task, index) => (
        <p className="text" key={index}>
          {task}
          <button className="edit-btn" onClick={() => editTask(index)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default App;
