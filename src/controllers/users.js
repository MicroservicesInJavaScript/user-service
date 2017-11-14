const config = require('../config');

const users = {};

users.list = (req, res, mongoDB) => mongoDB.collection(config.mongoCollection).find().toArray((err, result) => {
  if (err) throw err
  res.json(result)
})

users.read = (req, res, mongoDB) => mongoDB.collection(config.mongoCollection).find({ _id: req.params.id }).toArray((err, result) => {
  if (err) throw err
  res.json(result)
})

module.exports = users;
