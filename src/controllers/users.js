const { MongoClient } = require("mongodb");

const { error } = require("../services/logger");

const { MONGO_URL, MONGO_COLLECTION } = process.env;

const users = {};

users.list = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);
    db
      .collection(MONGO_COLLECTION)
      .find()
      .toArray((err, result) => {
        if (err) error(err);
        res.json(result);
        db.close();
      });
  });

users.read = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);
    db
      .collection(MONGO_COLLECTION)
      .find({ _id: req.params.id })
      .toArray((err, result) => {
        if (err) error(err);
        res.json(result);
        db.close();
      });
  });

module.exports = users;
