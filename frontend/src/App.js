import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const API_URL = 'http://localhost:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      setError('Ошибка при загрузке задач');
      setLoading(false);
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (title) => {
    try {
      const response = await axios.post(API_URL, { title });
      setTasks([response.data, ...tasks]);
    } catch (error) {
      setError('Ошибка при добавлении задачи');
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { completed: !completed });
      setTasks(tasks.map(task => 
        task.id === id ? response.data : task
      ));
    } catch (error) {
      setError('Ошибка при обновлении задачи');
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      setError('Ошибка при удалении задачи');
      console.error('Error deleting task:', error);
    }
  };

  if (loading) return <div className="container">Загрузка...</div>;

  return (
    <div className="App">
      <div className="container">
        <h1>📋 Менеджер задач</h1>
        {error && <div className="error">{error}</div>}
        <TaskForm onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;