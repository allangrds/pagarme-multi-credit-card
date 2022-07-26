FROM node:16.13.2

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /usr/app

COPY package.json .

RUN npm install
RUN npx prisma generate
RUN npx prisma migrate dev --name init

COPY . .
