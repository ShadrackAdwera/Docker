FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=80

EXPOSE ${PORT}

# VOLUME ["app/node_modules"] //can also be added as part of the command to run a container to prevent a rewrite of the files in the container by the bind mount


CMD ["npm", "start"]
