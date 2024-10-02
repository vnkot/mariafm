# Работа с докером (дев)
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

# Работа с докером (прод)
build-prod:
	docker-compose -f docker-compose.prod.yaml build
up-prod:
	docker-compose -f docker-compose.prod.yaml up -d
down-prod:
	docker-compose -f docker-compose.prod.yaml down