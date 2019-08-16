# official node image mounted on Alpine Linux with the minimum binaries
FROM node:alpine

# issueing commands as user "node" instead of "root"
USER node

# will make sure that next commands are issued inside this folder in the container
WORKDIR /home/node/rollup-plugin-generate-html
