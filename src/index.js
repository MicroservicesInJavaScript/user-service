const express = require('express')
const app = express()
const config = require('./config')
const MongoClient = require('mongodb').MongoClient()


// Load Controllers
const users = require('./controllers/users.js')
MongoClient.connect(config.mongoURL, (err, db) => {
    if (err) throw err

    // Health check endpoint
    app.get('/status', (req, res) => res.status(200).send('OK'))

    // User APIs
    app.get('/', (req, res) => {
        return users.list(req, res, db);
    })
    app.get('/:id', (req, res) => {
        return users.read(req, res, db);
    })

    // Listen on app port
    app.listen(config.appPort, () => console.log(`Users API app listening on port ${config.appPort}!`))
});
