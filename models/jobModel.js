const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true
    },
    logoURL:
    {
        type: String,
        required: true
    },
    jobPosition:
    {
        type: String,
        required: true
    },
    monthlySalary:
    {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    remote: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    aboutCompany: {
        type: String,
        required: true
    },
    skils: {
        type: Array,
        required: true
    }
})

const jobInfo = mongoose.model('addJob', jobSchema);      //mongoose model

module.exports = jobInfo;
