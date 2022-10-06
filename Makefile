bootstrap: down kill up
bootstrap-silent: down kill up-silent

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

format_prisma_schema:
	npx prisma format
