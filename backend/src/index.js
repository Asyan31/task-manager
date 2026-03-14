const express = require('express');
const cors = require('cors');
require('dotenv').config();

const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для логирования запросов
app.use((req, res, next) => {
  console.log(`📥 ${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Менеджер задач запущен' });
});

app.listen(PORT, () => {
  console.log(`✅ сервер запущен здесь: ${PORT}`);
});


