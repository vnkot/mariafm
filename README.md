# Одностраничный сайт на Django для радиостанции mariafm

<img src="./.trash/cover.png">

## Развертывание

Дисклеймер:
В корне проекта должен быть `.env` файл:
```shell
POSTGRES_DB=db_name
POSTGRES_USER=db_user
POSTGRES_PASSWORD=db_password

SUPERUSER_USERNAME=db_username
SUPERUSER_EMAIL=db_email
SUPERUSER_PASSWORD=db_password

HOST=your_domain

URL_TO_YANDEX_MAP=yandex_map_widget
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