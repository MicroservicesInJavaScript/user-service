const express = require('express');

const app = express();
const config = require('./config');

// Load Controllers
const users = require('./controllers/users.js');

// Health check endpoint
app.get('/status', (req, res) => res.status(200).send('OK'));

// User APIs
app.get('/', users.list);
app.get('/:id', users.read);

// Listen on app port
app.listen(config.appPort, () => {
  console.log(`Users API app listening on port ${config.appPort}!`);
});
