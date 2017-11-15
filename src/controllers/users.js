const { dbConnection } = require("../models/db");
const { users } = require("../models/collections");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.list = (req, res) =>
  dbConnection()
    .collection(users)
    .find()
    .toArray((err, result) => {
      if (err) error(err);

      res.json(result);
    });

endpoint.read = (req, res) =>
  dbConnection()
    .collection(users)
    .find({ _id: req.params.id })
    .toArray((err, result) => {
      if (err) error(err);

      res.json(result);
    });

endpoint.add = (req, res) =>
  dbConnection()
    .collection(users)
    .insert(req.body, (err, result) => {
      if (err) error(err);

      res.json(result);
    });

endpoint.update = (req, res) =>
  dbConnection()
    .collection(users)
    .replaceOne({ login: req.body.login }, req.body, (replaceError, result) => {
      if (replaceError) error(replaceError);

      res.json(result);
    });

endpoint.remove = (req, res) => {
  try {
    dbConnection()
      .collection(users)
      .deleteOne({ login: req.params.login });

    res.status(200).send("OK");
  } catch (e) {
    print(e);
  }
};

module.exports = endpoint;
