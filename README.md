# User-Service

## Start App

To start the user service, run the following command in the project root:

```sh
# Install deps
yarn

# Run as dev
yarn dev
```

## Available APIs

| Method | Path | Description |
| --- | --- | --- |
| GET | /         | Get all users |
| GET | /:user-id | Get a specific user record |
| GET | /status   | Get user service status |

## Generate Documentation

```sh
yarn run doc
```
