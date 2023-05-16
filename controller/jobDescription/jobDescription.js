const jobInfo = require("../../models/jobModel.js");

const jobDescription = async (req, res) => {


    try {
        const id = req.params.id;

        const jobDetail = jobInfo.find({ id: id });

        if (!jobDetail) {
            return res.status(400).send("JOb doesnt exist");
        }
        else {
            return res.status(200).jso({ jobDetail });
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = jobDescription;