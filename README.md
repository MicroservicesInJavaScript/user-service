# User-Service

## Start App

To start the user service, run the following command in the project root:

```sh
# Install deps
yarn

# Build docker containers
yarn build

# Teardown docker containers
yarn teardown

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
