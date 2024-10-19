# rock

## применение миграций в бд (в контейнере)
    npx prisma migrate dev 

## создать пустую миграцию
    npx prisma migrate dev --create-only
    npx prisma migrate dev

## убить контейнер
    docker compose rm
    
## запустить создание интерфейсов
    npx prisma generate
    
## войти в контейнер
    docker exec -it rock-backend-1 /bin/bash
previewFeatures = ["driverAdapters"]