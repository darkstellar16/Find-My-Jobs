require("dotenv").config;     //for environment variables..

const express = require("express");         //required express
const app = express();


const datbaseConnection = require("./config/db.js");    // for database
datbaseConnection();



const bodyParser = require("body-parser");         //for body-parser
app.use(bodyParser.urlencoded({ extended: true }));



const port = process.env.PORT || 8000;                 //for host



app.listen(port, () => {                                
    console.log("Server is up and Running");
})