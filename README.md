
# Task-Manager

Приложение таск-менеджер кафедры ВУЗа.  
Для запуска приложение понадобится запущенный и настроенный докер контейнер БД и любой удобный инструмент для просмотра и управление БД.



## Чтобы создать докер контейнер PostgreSQL

Выполните в командной строке (например WIN + R) следующую команду

```bash
  docker run --name taskmanager-db -p 5432:5432 -e POSTGRES_USER=albez -e POSTGRES_PASSWORD=albez -e POSTGRES_DB=taskmanager -d postgres
```

Также необходимо создать схему под названием taskmanager

```bash
CREATE SCHEMA IF NOT EXISTS taskmanager;
```
Готово, далее можете запускать проект и пользовать всеми прелестями сия технолоджи
