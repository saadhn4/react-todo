import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(["Wash","Clean"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask) {
      alert("Enter a task.");
    }
    setTasks((t) => [...t, newTask.trim()]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
          {task} <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default App;
