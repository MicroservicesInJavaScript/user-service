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
 * @returns {object} book - the instanciated book object
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
