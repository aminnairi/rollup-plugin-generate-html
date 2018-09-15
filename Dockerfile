FROM node:10.10.0-slim

WORKDIR /home/node/npm/

COPY . .

COPY .npmrc .

CMD [ "npm", "unpublish", "--force" ]