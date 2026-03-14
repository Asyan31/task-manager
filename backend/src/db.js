const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

// Создание таблицы при запуске
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT false,
        user_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Таблица "tasks" готова');
    
    // Проверим, есть ли данные
    const result = await pool.query('SELECT COUNT(*) FROM tasks');
    console.log(`📊 Задачи в базе данных: ${result.rows[0].count}`);
  } catch (error) {
    console.error('❌ Ошибка создания задачи:', error);
  }
};

createTable();

module.exports = pool;