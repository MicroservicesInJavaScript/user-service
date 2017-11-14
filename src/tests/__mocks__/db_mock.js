const fs = require('fs');
const db = {};
const config = require('../../config');
const mongodb = require('mongo-mock');
mongodb.max_delay = 0; // So it's not async

const MongoClient = mongodb.MongoClient;
MongoClient.persist="mongo.js"; //persist the data to disk

MongoClient.connect(config.mongoURL, {}, function(err, db) {
    if (err) throw err
    return db;
});

export default MongoClient;