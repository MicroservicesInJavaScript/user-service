const { dbConnection } = require("../models/db");
const { authorities } = require("../models/collections");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.read = (req, res) =>
  dbConnection()
    .collection(authorities)
    .find()
    .toArray((err, result) => {
      if (err) error(err);

      res.json(result);
    });

module.exports = endpoint;
