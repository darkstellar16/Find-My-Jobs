const express = require("express");

const route = express.Router();

const filterData = require("../../controller/filterJob/filterJob.js");

route.get("/",filterData);

module.exports = route;