require("dotenv").config();

const express = require("express");
const path = require("path");
const middleware = require("./middleware");
const { MongoClient } = require("mongodb");
const { MONGO_URL, PORT } = process.env;
const authorities = require("./controllers/authorities");

const app = express();
app.use(middleware);

// Load Controllers
const users = require("./controllers/users");

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) throw err;

  // Api Docs endpoint
  app.use("/docs", express.static(path.join(__dirname, "api-docs")));

  // Health check endpoint
  app.get("/status", (req, res) => res.status(200).send("OK"));

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

  app.get("/authorities", authorities.read);

  // Listen on app port
  app.listen(PORT, () =>
    console.log(`Users API app listening on port ${PORT}!`)
  );
});
