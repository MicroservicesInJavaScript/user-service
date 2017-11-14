const path = require("path");
const express = require("express");
const app = express();
const config = require("./config");
// Load Controllers
const users = require("./controllers/users.js");
const authorities = require("./controllers/authorities.js");

// Api Docs endpoint
app.use("/docs", express.static(path.join(__dirname, "api-docs")));

// Health check endpoint
app.get("/status", (req, res) => res.status(200).send("OK"));

// User APIs
app.get("/", users.list);
app.post("/", users.add);
app.put("/", users.update);

app.get("/authorities", authorities.read);

app.delete("/:login", users.remove);
app.get("/:login", users.read);

// Listen on app port
app.listen(config.appPort, () =>
  console.log(`Users API app listening on port ${config.appPort}!`)
);
