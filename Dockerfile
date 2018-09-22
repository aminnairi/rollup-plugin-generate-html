# official node image with the minimum binaries
FROM node:slim

# issueing commands as user "node" instead of "root"
USER node

# will make sure that next commands are issued inside this folder in the container
WORKDIR /home/node/rollup-plugin-generate-html
