const express = require("express");

const route = express.Router();


const jobData = require("../../controller/addJob/addJob.js");

const auth = require("../../middlewares/auth .js");

route.post("/", auth, jobData);

module.exports = route;

