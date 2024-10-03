# Одностраничный сайт на Django для радиостанции mariafm

<img src="./.trash/cover.png">

## Развертывание

Дисклеймер:
В корне проекта должен быть `.env` файл:
```shell
SECRET=<your random key>
HOST=localhost
PORT=5173
PROTOCOL=http
```

### Для разработки (через докер)
Запуск:
```shell
sudo make build-dev
sudo make up-dev
```
Остановка:
```shell
sudo make down-dev
```

### Для разработки (без докера)
#### Установка зависимостей
```shell
sudo make install
```
#### Запуск
В одной консоли
```shell
python manage.py runserver
```
В другой консоли
```shell
npm run dev
```

### Продакшен
Запуск:
```shell
sudo make build-prod
sudo make up-prod
```
Остановка:
```shell
sudo make down-prod
```

## Полезные ссылки
1. [Подключение ViteJs](https://github.com/MrBin99/django-vite?tab=readme-ov-file)