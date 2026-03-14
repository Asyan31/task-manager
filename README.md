# Task Manager 📋

Простой сервис для учета задач сотрудников с нежно-голубым дизайном и эффектом стекла.

## ✨ Возможности

- ✅ Просмотр списка задач
- ➕ Добавление новых задач
- ✔️ Отметка задач выполненными
- 🗑️ Удаление задач
- 📅 Автоматическое отображение даты создания
- 🎨 Современный glassmorphism дизайн

## 🛠️ Технологии

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: React, Axios
- **Docker**: Контейнеризация приложения

## 🚀 Способы запуска

### Способ 1: Запуск с помощью Docker (рекомендуется)

#### Предварительные требования
-Docker Desktop
-Git

#### Шаги для запуска

1. **Клонируйте репозиторий**
   git clone https://github.com/Asyan31/task-manager.git
   cd task-manager
   
2. **Запустите контейнеры**
  docker-compose up -d

3. **Проверьте, что контейнеры запущены**
  docker ps

**Вы должны увидеть два контейнера:**

task-manager-backend (порт 5000)
task-manager-db (порт 5432)

#### Просмотр логов

# Логи backend
docker logs task-manager-backend

# Логи базы данных
docker logs task-manager-db

# Все логи вместе
docker-compose logs

#### Запустите frontend (отдельно, без Docker)

cd frontend
npm install
npm start

##### Откройте приложение
http://localhost:3000
