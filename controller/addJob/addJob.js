const jobInfo = require("../../models/jobModel.js");


const JobData = async (req, res) => {

    try {
        const { company, logoURL, jobPosition, monthlySalary, jobType, remote, location, jobDescription, aboutCompany, skills } = req.body;

        const jobField = await jobInfo.create({

            company: company,
            logoURL: logoURL,
            jobPosition: jobPosition,
            monthlySalary: monthlySalary,
            jobType: jobType,
            remote: remote,
            location: location,
            jobDescription: jobDescription,
            aboutCompany: aboutCompany,
            skills: skills
        })
        res.status(200).send("Job added sucessfully");

    } catch (error) {
        console.log(error);
    }
}

module.exports = JobData;



















