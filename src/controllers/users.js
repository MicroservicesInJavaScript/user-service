const MongoClient = require('mongodb').MongoClient
const config = require('../config')
const { error } = require('../services/logger');

const users = {}

users.list = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) error(err);
  db.collection(config.mongoCollection).find().toArray((err, result) => {
    if (err) error(err);
    res.json(result)
    db.close()
  })
})

users.read = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) error(err);
  db.collection(config.mongoCollection).find({ _id: req.params.id }).toArray((err, result) => {
    if (err) error(err);
    res.json(result)
    db.close()
  })
})

module.exports = users
