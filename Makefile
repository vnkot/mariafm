# Работа с докером
build-dev:
	docker-compose -f docker-compose.dev.yaml build
up-dev:
	docker-compose -f docker-compose.dev.yaml up -d
down-dev:
	docker-compose -f docker-compose.dev.yaml down

# Установка зависимостей
install:
	poetry install
	npm install