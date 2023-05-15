const express = require("express")

const route = express.Router();

const register = require("../routes/register/register.js");

const login = require("../routes/login/login.js");

const addJob = require("../routes/addJob/addJob.js");


route.use('/register', register);
route.use('/login', login);
route.use('/addJob', addJob);


module.exports = route;
