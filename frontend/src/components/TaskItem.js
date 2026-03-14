import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  // Форматирование даты
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id, task.completed)}
        title={task.completed ? "Отметить как невыполненную" : "Отметить как выполненную"}
      />
      <div className="task-content">
        <span className="task-title">{task.title}</span>
        {task.created_at && (
          <span className="task-date">{formatDate(task.created_at)}</span>
        )}
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        title="Удалить задачу"
      >
        🗑️ Удалить
      </button>
    </div>
  );
}

export default TaskItem;