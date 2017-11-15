const { authorities } = require("../models");
const { error } = require("../services/logger");

const endpoint = {};

endpoint.read = (req, res, mongoDB) =>
  mongoDB
    .collection(authorities)
    .find()
    .toArray((err, result) => {
      if (err) error(err);

      res.json(result);
    });

module.exports = endpoint;
