const { MongoClient } = require("mongodb");

const { MONGO_URL } = process.env;

const { users } = require("../models");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.list = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);

    db
      .collection(users)
      .find()
      .toArray((err, result) => {
        if (err) error(err);

        res.json(result);
        db.close();
      });
  });

endpoint.read = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);
    console.log(req.params.login);

    db
      .collection(users)
      .find({ login: req.params.login })
      .toArray((err, result) => {
        if (err) error(err);

        res.json(result);
        db.close();
      });
  });

endpoint.add = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);

    db.collection(users).insert(req.body, function(err2, result) {
      if (err2) throw err2;

      res.json(result);
      db.close();
    });
  });

endpoint.update = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);
    console.log(req.body.login);

    db
      .collection(users)
      .replaceOne({ login: req.body.login }, req.body, function(
        replaceError,
        result
      ) {
        if (replaceError) throw replaceError;

        res.json(result);
        db.close();
      });
  });

endpoint.remove = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);
    console.log(req.params.login);

    try {
      db.collection(users).deleteOne({ login: req.params.login });

      res.status(200).send("OK");
    } catch (e) {
      print(e);
    }

    db.close();
  });

module.exports = endpoint;
