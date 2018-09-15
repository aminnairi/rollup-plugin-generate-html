# official node image with the minimum binaries
FROM node:10.10.0-slim

# will make sure that next commands are issued inside this folder in the container
WORKDIR /home/node/src/

# copy the node package configuration file first to take advantage of the cache layer
COPY package.json .

# will install any dependencies that are specified insid ethe node package configuration file
RUN npm install

# copy everything inside the current filesystem folder to the container filesystem
COPY . .

# build the plugin
CMD [ "npm", "run", "build" ]