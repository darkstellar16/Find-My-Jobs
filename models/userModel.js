const mongoose = require("mongoose");    //required mongoose

const userSchema = new mongoose.Schema({        //created a schema which tells how the data will be saved in database..
    
    name:
    {
        type: String,
        required: true,
        minlength: 3
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    mobile:
    {
        type: Number,
        required: true,
        minlength: 10,
        maxlenght: 10
    },
    password:
    {
        type: String,
        required: true,
        minlength: 5
    },
    token: {
        type: String
    }
})


const userInfo = mongoose.model('user', userSchema);      //mongoose model

module.exports = userInfo;