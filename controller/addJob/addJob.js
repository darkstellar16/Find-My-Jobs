const jobInfo = require("../../models/jobModel.js");


const JobData = async (req, res) => {

    try {
        const { company, logoURL, jobPosition, monthlySalary, jobType, remote, location, jobDescription, aboutCompany,skills} = req.body;
        


        const skill = skills.toUpperCase().split(',').map((values)=>{return values.trim()
        })

        console.log(skill);
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
            skills: skill
        })
        res.status(200).send("Job added sucessfully");

    } catch (error) {
        console.log(error);
    }
}

module.exports = JobData;



















