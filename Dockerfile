# Instructions to set up the image AKA the template for building the container

# Exposes the image you should build on; in this case I'm building from a nodejs image
FROM node

# Set the working directory of the docker container
WORKDIR /app

# As an optimization technique first copy this folder into the app image folder to prevent a rerun of npm install incase of an image rebuild
# ==> Images use a Layer Based Architecture. All commands below the changed file are rerun ; rebuild result is not fetched from the cache
COPY package.json /app

# Command to install all packages required 
RUN npm install

# Copy the project into the image ./app => directory in the image where those files should be stored, typically use a folder inside the root directory
COPY . /app

# Expose the port to run on since the docker container is isolated from the local environment
EXPOSE 5000

# Start the server. Separate the commands to start your npm server into strings ie. node app.js
CMD ["node","app.js"]
# Always specify CMD

