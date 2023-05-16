const express = require("express");

const route = express.Router();

const jobDescription = require("../../controller/jobDescription/jobDescription.js");

route.get("/", jobDescription);


module.exports = route;