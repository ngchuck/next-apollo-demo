<h3>OVERVIEW</h3>
<p>This project is forked from https://github.com/arunoda/next-apollo-demo. This is a Next.js, Apollo GraphQL client and server application which are upgraded to the latest versions. The code is refactored to use typescript, a new directory structure, tests, functional components and is containerised using docker and docker-compose.</p>

<h3>HOW TO RUN THE DOCKER CONTAINER IN LOCAL ENVIRONMENT</h3>
Please follow the steps below:

Run the below command to clone the repository in your local machine

```
git clone https://github.com/ngchuck/next-apollo-demo.git</p>
```

Please check if you have docker installed using the below command otherwise download it from https://docs.docker.com/get-docker/

```
docker -v

docker compose ls
```

To start both server and client together using docker compose, please run the below commands in the root of the project folder in the below order: 

```
docker-compose build
```

Once the above command executes, run the below command 

```
docker-compose up
```
<p>The above steps will start the server and client and you can access the app now from http://localhost:3030/ </p>

---

<p>Alternatively you may also start the server and client apps seperately if you follow the below steps </p>

<h3>Starting the Server </h3>

Change current working directory to server folder 

```
cd ./next-apollo-demo/server
```

Start the container using docker compose. 

```
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```
Once the above command runs successfully, run the below command:

```
docker compose up
```

<h3>Starting the Client </h3>

Change current working directory to client folder. If you are in server directory, run the below command. 

```
cd ../client
```

Start the container using docker compose. 

```
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```
Once the above command runs successfully, run the below command:

```
docker compose up
```

<h5>If you see errors</h5>

If you get the below error, please ensure you close anything else running on in port 3000(client) or 4000(server). Alternatively change the port in client and server dockerfile configurations.

```
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3000 -> 0.0.0.0:0: listen tcp 0.0.0.0:3000: bind: address already in use
```

---

<h3>Run snapshot and Jest test suite</h3>

Change directory to the client/src folder and run the below command

```
npm run test
```

