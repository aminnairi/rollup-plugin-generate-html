FROM node:10.10.0-slim

WORKDIR /home/node/src/

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "build" ]