# Task Manager

Простой сервис для учета задач сотрудников.

## Технологии

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: React, Axios

## Установка и запуск

### Предварительные требования

- Node.js (LTS версия)
- PostgreSQL
- Git

### Пошаговая инструкция

#### 1. Клонирование репозитория

git clone https://github.com/Asyan31/task-manager.git

cd task-manager

#### 2. Настройка базы данных

#### Вариант А: Через pgAdmin (рекомендуется)

Откройте pgAdmin

Создайте новую базу данных с именем task_manager

Запомните пароль пользователя postgres

#### Вариант Б: Через командную строку

psql -U postgres
CREATE DATABASE task_manager;
\q

#### 3. Настройка backend

cd backend
npm install

#### Создайте файл .env в папке backend:

DB_USER=postgres
DB_PASSWORD=ваш_пароль
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=task_manager
PORT=5000

#### Запустите сервер:

npm run dev
Сервер запустится на http://localhost:5000

#### 4. Настройка frontend
Откройте новый терминал

cd frontend
npm install
npm start

#### Приложение откроется на http://localhost:3000