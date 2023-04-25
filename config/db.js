require("dotenv").config();

const mongoose = require("mongoose");


const url = process.env.MONGO_URI;
const connection = async () => {
    try {

        mongoose.connect(url, { useNewUrlParser: true })
        console.log("DataBase is connected");

    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;