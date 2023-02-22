include .env

bootstrap: down kill up
bootstrap-silent: down kill up-silent

build:
	@docker-compose build --no-cache

destroy:
	@docker-compose down --volumes

down:
	@docker-compose down

kill:
	@docker-compose kill

up:
	@docker-compose up

up-silent:
	@docker-compose up -d

bash:
	@docker exec -it api /bin/bash

prisma_format_schema:
	npx prisma format

prisma_studio:
	npx prisma studio

# prism_generate:
# 	@docker run --rm \
#     --network pagarme-credit-card-network \
#     -e DATABASE_URL=${DATABASE_URL} \
#     pagarme-multi-credit-card-api \
#     npx prisma generate
#     //mapear o volume da api

prism_migrate_dev:
	@docker run --rm \
    --network pagarme-credit-card-network \
    -e DATABASE_URL=${DATABASE_URL} \
    pagarme-multi-credit-card-api \
    npx prisma migrate dev
