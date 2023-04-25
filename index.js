require("dotenv").config;

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



const port = process.env.PORT || 8000;



// app.listen(port, () => {
//     console.log("Server is up and Running");
// })