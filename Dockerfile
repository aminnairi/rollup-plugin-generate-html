# official node image with the minimum binaries
FROM node:slim

# will make sure that next commands are issued inside this folder in the container
WORKDIR /home/node/npm/

# copy everything inside the current filesystem folder to the container filesystem
COPY . .

# publish the scoped package to be accessible publicly
CMD [ "npm", "publish", "--access=public" ]
