const jobInfo = require("../../models/jobModel.js");

const editJob = async (req, res) => {
    const { company, jobPosition, monthlySalary, jobType, remote, location,  } = req.body;

    const recruiterName = req.body.name;

    try {

        const id = req.params.id;

        const edit = await jobInfo.findByIdAndUpdate({ id })

        if (!edit) {
            return res.status(404).send("Job doesnt exist");
        }
        else {
            edit.company = company;
            edit.jobPosition = jobPosition;
            edit.monthlySalary = monthlySalary;
            edit.jobType = jobType;
            edit.location = location;
            edit.remote = remote;
            edit.recruiterName = recruiterName;

            edit.save();

            res.status(200).send({ edit })
        }

    } catch (error) {
        console.log(error);

    }
}

module.exports = editJob;