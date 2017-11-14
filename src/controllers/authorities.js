const { MongoClient } = require("mongodb");

const { MONGO_URL } = process.env;

const { authorities } = require("../models");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.read = (req, res) =>
  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) error(err);

    db
      .collection(authorities)
      .find()
      .toArray((err, result) => {
        if (err) error(err);


        res.json(result);
        db.close();
      });
  });

module.exports = endpoint;
