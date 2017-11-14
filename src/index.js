require("dotenv").config();

const path = require("path");
const express = require("express");

const middleware = require("./middleware");
const users = require("./controllers/users");
const authorities = require("./controllers/authorities");

const { PORT } = process.env;

const app = express();

app.use(middleware);

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
app.listen(PORT, () => console.log(`Users API app listening on port ${PORT}!`));
