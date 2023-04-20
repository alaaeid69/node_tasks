FROM node:14-alpine

WORKDIR /app

COPY first.js package*.json ./
RUN npm install
COPY . .
EXPOSE 4012
CMD node first.js