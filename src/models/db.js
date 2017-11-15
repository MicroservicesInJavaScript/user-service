const { MongoClient } = require("mongodb");
const { MONGO_URL } = process.env;

const state = { db: null };

exports.connect = done => {
  if (state.db) return done();

  MongoClient.connect(MONGO_URL, (err, db) => {
    if (err) {
      error(err);

      return done();
    }

    state.db = db;
    done();
  });
};

exports.dbConnection = () => {
  return state.db;
};

exports.close = done => {
  if (state.db) {
    state.db.close((err, result) => {
      state.db = null;
      state.mode = null;

      done(err);
    });
  }
};
