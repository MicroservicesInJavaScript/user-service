const express = require('express')

const config = require('./config')
const middleware = require('./middleware')
const users = require('./controllers/users.js')

const app = express()

app.use(middleware);

// Health check endpoint
app.get('/status', (req, res) => res.status(200).send('OK'))

// User APIs
app.get('/', users.list)
app.get('/:id', users.read)

// Listen on app port
app.listen(config.appPort, () => console.log(`Users API app listening on port ${config.appPort}!`))
