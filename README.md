# Одностраничный сайт на Django для радиостанции mariafm

<img src="./.trash/cover.png">

## Развертывание
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

## Полезные ссылки
1. [Подключение ViteJs](https://github.com/MrBin99/django-vite?tab=readme-ov-file)