const { MongoClient } = require('mongodb');

const config = require('../config');

const users = {};

users.list = (req, res) => MongoClient.connect(config.mongoURL, (connectError, db) => {
  if (connectError) throw connectError;

  db.collection(config.mongoCollection)
    .find()
    .toArray((findError, result) => {
      if (findError) throw findError;

      res.json(result);
      db.close();
    });
});

users.read = (req, res) => MongoClient.connect(config.mongoURL, (connectError, db) => {
  if (connectError) throw connectError;

  db.collection(config.mongoCollection)
    .find({ _id: req.params.id })
    .toArray((findError, result) => {
      if (findError) throw findError;

      res.json(result);
      db.close();
    });
});

module.exports = users;
