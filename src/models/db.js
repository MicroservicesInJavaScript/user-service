const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;

const logger = require("../services/logger");

const messages = {
  connection: {
    failed: "Requested DB Operation Failed",
    created: "Connection to DB Created",
    active: "Already connected to DB",
    closed: "Connection to DB Closed"
  }
};

let dbConnectionInstance;

exports.connect = () => {
  if (dbConnectionInstance) return logger.info(messages.connection.active);

  MongoClient.connect(MONGO_URL, function(err, db) {
    if (err) logger.error(messages.connection.failed, err);

    dbConnectionInstance = db;

    logger.info(messages.connection.created);
  });
};

exports.dbConnection = () => {
  return dbConnectionInstance;
};

exports.close = () => {
  if (dbConnectionInstance) {
    dbConnectionInstance.close((err, result) => {
      dbConnectionInstance = null;
      if (err) logger.error(messages.connection.failed, err);

      logger.info(messages.connection.closed, result);
    });
  }
};
