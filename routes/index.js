const express = require("express")

const route = express.Router();

const register = require("../routes/register/register.js");

const login = require("../routes/login/login.js");

const addJob = require("../routes/addJob/addJob.js");

const filterJob = require("../routes/filterJob/filterJob.js");

const jobDescription = require("../routes/jobDescription/jobDescription.js");

const editJob = require("../routes/editJob/editJob.js");

route.use('/register', register);
route.use('/login', login);
route.use('/addJob', addJob);
route.use('/filterJob', filterJob);
route.use('/jobDesciption/:id', jobDescription);
route.use('/editJob/:id', editJob);

module.exports = route;
