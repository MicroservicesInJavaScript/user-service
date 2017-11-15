require("dotenv").config();

const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const middleware = require("./middleware");
const authorities = require("./controllers/authorities");
const users = require("./controllers/users");
const { error } = require("./services/logger");
const { MONGO_URL, PORT } = process.env;

const app = express();
app.use(middleware);

// Api Docs endpoint
app.use("/docs", express.static(path.join(__dirname, "api-docs")));

// Health check endpoint
app.get("/status", (req, res) => res.status(200).send("OK"));

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) error(err);

  // User APIs
  app.get("/", (req, res) => {
    return users.list(req, res, db);
  });

  app.post("/", (req, res) => {
    return users.add(req, res, db);
  });

  app.put("/", (req, res) => {
    return users.update(req, res, db);
  });

  app.delete("/:login", (req, res) => {
    return users.remove(req, res, db);
  });

  app.get("/:login", (req, res) => {
    return users.read(req, res, db);
  });

  app.get("/authorities", (req, res) => {
    return authorities.read(req, res, db);
  });

  // Listen on app port
  app.listen(PORT, () =>
    console.log(`Users API app listening on port ${PORT}!`)
  );
});
