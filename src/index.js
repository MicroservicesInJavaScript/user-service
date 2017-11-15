require("dotenv").config();

const express = require("express");
const path = require("path");

require("./models/db").connect(); // creates Mongo Client

const { error } = require("./services/logger");
const middleware = require("./middleware");
const routes = require("./controllers");

const { PORT } = process.env;

const app = express();

app.use(middleware);

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

// Api Docs endpoint
app.use("/docs", express.static(path.join(__dirname, "api-docs")));

// Health check endpoint
app.get("/status", (req, res) => res.status(200).send("OK"));

app.use(routes);

app.listen(PORT, () => console.log(`Users API app listening on port ${PORT}!`));
