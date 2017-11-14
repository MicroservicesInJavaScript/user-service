# User-Service

## Run App Locally

To start the user service, run the following command in the project root:

```shell
$ yarn dev
```

## Build and Run Dockerised App

To spin up connected Docker containers for the user-service ExpressJS app and MongoDB database, run the following command:

```shell
$ yarn build
```

To stop and remove these Docker containers, run the following command:

```shell
$ yarn teardown
```

## Available APIs

```shell
* GET /          - Get all users
* GET /:user-id  - Get a specific user record
* GET /status    - Get user service status
```
