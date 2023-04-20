FROM node:16

WORKDIR /app

COPY first.js package*.json ./
RUN npm install
COPY . .
EXPOSE 4010
CMD node first.js