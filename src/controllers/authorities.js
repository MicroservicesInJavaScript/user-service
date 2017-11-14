const MongoClient = require("mongodb").MongoClient;
const config = require("../config");

const authorities = {};

authorities.read = (req, res) =>
  MongoClient.connect(config.mongoURL, (err, db) => {
    if (err) throw err;
    db
      .collection(config.authorityCollection)
      .find()
      .toArray((err, result) => {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });

module.exports = authorities;
