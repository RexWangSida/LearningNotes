# Docker
- Isolated environment for each container of application
- No overlapping between each other
- code --build with docker file--> docker image --run on docker engine--> docker container
## [Docker Container](https://www.docker.com/resources/what-container)
<img src="./src/container.jpg"></img>

## Basic Commands:
- Create a container of the image and start the container
```
docker run <image>
```
- Start an existing container
```
docker start <name|id>
```
- Stop an running container
```
docker stop <name|id>
```
- List all running containers, `-a` include stopped containers
```
docker ps
```
- Remove a container
```
docker rm <name|id>
```
