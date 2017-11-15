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
| GET | /status   | Get user service status |
| GET | /         | Get all users |
| POST | /         | Create a new user |
| PUT | /         | Update a user |
| GET | /authorities         | Get all authorities (i.e. roles) for users |
| GET | /:login | Get a specific user record |
| DELETE | /:login | Delete a specific user record |

## Logging

### Access Logging

This is handled by [morgan](https://github.com/expressjs/morgan). No config should be required.

Location of these logs are stored in the location set via the env var `REQUEST_LOGGER_PATH`

### Server Logging

This is done using the [pino package](https://github.com/pinojs/pino) and is configures in [services/logger.js](./src/services/logger.js)

To bring logging into your module:

```js
const { info, error }, pino = require('services/logger');

// For an Error entry
if (true) {
  error('Your error message or...', errorObject);
}

// For an Info entry
if (true) {
  info('Your info message or...', infoObject);
}

// Alternatively you can address off the pino object
if (true) {
  pino.error('Your error message or...', errorObject);
  pino.info('Your info message or...', infoObject);
}
```

Location of these logs are stored in the location set via the env var `SERVER_LOGGER_PATH`

## API Documentation

We are using JSDoc to generate all documentation.

### Adding Documentation Comments

Use a JSDoc tag to describe your code

```js
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {object} book - the instantiated book object
 */
function Book(title, author) {
  var book = {};

  .
  .
  .

  return book;
}
```

More info and examples [here](http://usejsdoc.org/about-getting-started.html)

### To Generate Documentation

```sh
yarn run doc
```
