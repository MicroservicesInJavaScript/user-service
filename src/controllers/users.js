const MongoClient = require('mongodb').MongoClient
const config = require('../config')

const users = {};

users.list = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  db.collection(config.userCollection).find().toArray((err, result) => {
    if (err) throw err
    res.json(result)
    db.close()
  })
})

users.read = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  db.collection(config.userCollection).find({ _id: req.params.id }).toArray((err, result) => {
    if (err) throw err
    res.json(result)
    db.close()
  })
})

users.add = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  console.log(req.body);
  db.collection(config.userCollection).insert(req.body, function (err2, result) {
  if (err2) throw err2;
    res.json(result)
    db.close()
  })
})

users.update = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  db.collection(config.userCollection).replaceOne({ login: req.params.login }, req.body, function (err2, result) {
  if (err2) throw err2;
    res.json(result)
    db.close()
  })
})

users.remove = (req, res) => MongoClient.connect(config.mongoURL, (err, db) => {
  if (err) throw err
  try {
   db.collection(config.userCollection).deleteOne({ login: req.params.login });
  } catch (e) {
     print(e);
  }
  db.close();
})

module.exports = users
