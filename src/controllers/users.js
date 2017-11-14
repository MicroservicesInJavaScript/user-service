const MongoClient = require('mongodb').MongoClient
const config = require('../config')

const users = {}

users.list = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  db.collection(config.mongoCollection).find().toArray((err, result) => {
    if (err) throw err
    res.json(result)
    db.close()
  })
})

users.read = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  db.collection(config.mongoCollection).find({ _id: req.params.id }).toArray((err, result) => {
    if (err) throw err
    res.json(result)
    db.close()
  })
})

module.exports = users
