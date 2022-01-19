FROM node:17

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

ENTRYPOINT npm run start