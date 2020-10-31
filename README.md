# Docker

## DISCLAIMER! This is my understanding of Docker, I'm writing this README off of my head

So docker is just a tool for creating and managing containers. A container in simple words is a unit of software i.e packaged code with depedencies to run that code.

## Why containers

* Need for compatibility between production and dev environment.
* Working in a team may require a certain uniform setup between all devs in the team
* Different projects requiring different library / framework / tools versions may need you to downgrade or upgrade a library version just to catch an implementation of a certain method.

## But why not just provision virtual machines

That would be okay too if I had a powerful machine but my machine is kind of slow nowadays and adding 'another machine' on top of an already slow machine === a ticking time bomb.

Containers solve this problem by encapsulating apps instead of full on machines. You can also share an image (a template for building a container) of your container for someone else to replicate your environment.

In addition, containers are actually isolated from one another and bundle their own software, libraries and configuration files; they can also communicate with each other through well-defined channels.

## Set up

* Follow this [link](https://www.docker.com/get-started) to setup Docker on either Mac | Linux | Windows.

### Docker Cheat Sheet

Run the following commands from your root folder.

* View all images:

`
$ docker images
`

* Builds and image from a Docker file:

`
$ docker run .
`

The result of running this command will be the container name and some other metadata.

* Run a docker container

`
$ docker run -p 3000:3000 container-name
`

The former 3000 represents the PORT exposed to the container to run on the local machine, the latter is the PORT in the container(self contained) that is exposed when the image is created.

* A running container can be in an attached (running in the foreground) or detached (running in the background) pass the -a or -d for either of the two

To ensure a container is removed when it is stopped include --rm in the run command. Example:

`
$ docker run -p 3000:3000 -d --rm deez-docker
`

* To view all containers (returns metadata including the names of the docker containers), omit the -a if you only want to view the running containers :

`
$ docker ps -a
`

* Terminate a container

`
$ docker stop container-name
`

* Delete an image and all the layers inside that image. However you can only remove an image if it is not being used by a container; that includes the stopped containers.

`
$ docker rmi image-id
`

* Delete a container

`
$ docker rm <container-name(s)>
`

Well, an app may not necessarily need a server to run. Say the Fibonacci Sequence, a quick sort algorithm, 0-1 Knapsack Algorithm, you catch the drift, in such a scenario regarding utility functions we can use:

`
$ docker run -it image_id
`
The it tag tells docker that we want to run the app in an interactive mode ie. provide user input and receive output on the console.

* Remove all unused images

`
$ docker image prune
`

* Remove all containers at once

`
$ docker container prune
`

* For more commands run:

`
$ docker <command name eg. run , build> --help
`

## Naming and tagging containers / images

* Images can also be named (tagged) while containers named instead of using the default name provided upon an image build. There are 2 scenarios:
    - Chosing a specific version of an image when building the Dockerfile, you can specify in the FROM say,  <mark>FROM node:latest</mark> . This will build your image based on the latest version of node. [More on supported node tags]('https://hub.docker.com/_/node')
    - To tag your own image, while building the image, run: 

        `
        $ docker build -t tag-name:version .
        ` 
* In naming containers, use --name container-name tag

`
$ docker run -p 3000:3000 -d --rm --name any-name image-tag
`



* Anyways, Clone the project, build your own container from the image, run the server on port 5000 
