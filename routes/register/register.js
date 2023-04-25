const express = require("express");

const route = express.Router();


const registerData = require("../../controller/register/register.js");

route.post('/', registerData);




module.exports = route;