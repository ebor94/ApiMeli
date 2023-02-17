const express = require("express");
const routes = express.Router();
const readFile = require("../controllers/saveData");
const getdata = require("../controllers/getdata");

routes.post("/savemeliData/", readFile);
routes.get("/getdata/", getdata);

module.exports = routes;
