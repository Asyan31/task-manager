import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите новую задачу..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">➕ Добавить</button>
    </form>
  );
}

export default TaskForm;