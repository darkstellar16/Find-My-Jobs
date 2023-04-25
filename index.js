require("dotenv").config;     //for environment variables..

const express = require("express");         //required express
const app = express();


const datbaseConnection = require("./config/db.js");    // for database
datbaseConnection();

app.use(express.json());

const bodyParser = require("body-parser");         //for body-parser
app.use(bodyParser.urlencoded({ extended: true }));


const main = require("./routes/index.js")
app.use('/', main);


const port = process.env.PORT || 6001                //for host


app.listen(port, () => {
    console.log("Server is up and Running");
})