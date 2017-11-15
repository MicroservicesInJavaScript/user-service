const config = require("../config");
const { users } = require("../models");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.list = (req, res, mongoDB) =>
  mongoDB
    .collection(config.userCollection)
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });

endpoint.read = (req, res, mongoDB) =>
  mongoDB
    .collection(config.userCollection)
    .find({ _id: req.params.id })
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });

endpoint.add = (req, res, mongoDB) =>
  mongoDB.collection(users).insert(req.body, (err2, result) => {
    if (err2) throw err2;
    res.json(result);
  });

endpoint.update = (req, res, mongoDB) =>
  mongoDB
    .collection(users)
    .replaceOne({ login: req.body.login }, req.body, (replaceError, result) => {
      if (replaceError) throw replaceError;

      res.json(result);
    });

endpoint.remove = (req, res, mongoDB) => {
  try {
    mongoDB.collection(users).deleteOne({ login: req.params.login });

    res.status(200).send("OK");
  } catch (e) {
    print(e);
  }
};

module.exports = endpoint;
