const { Router } = require("express");

const authorities = require("./authorities");
const users = require("./users");

const routes = Router();

routes.get("/authorities", (req, res) => authorities.read(req, res));

routes.delete("/:login", (req, res) => users.remove(req, res));
routes.get("/:login", (req, res) => users.read(req, res));
routes.get("/", (req, res) => users.list(req, res));
routes.post("/", (req, res) => users.add(req, res));
routes.put("/", (req, res) => users.update(req, res));

module.exports = routes;
