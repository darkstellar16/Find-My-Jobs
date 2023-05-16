const express = require("express");

const route = express.Router();

const editJob = require("../../controller/editJob/editJob.js");

route.put("/", editJob);


module.exports = route;