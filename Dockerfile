FROM node:16.14.2-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .
