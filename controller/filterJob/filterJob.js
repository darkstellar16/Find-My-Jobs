const jobInfo = require("../../models/jobModel.js");


const filterData = async (req, res) => {

    const { jobPosition,skills} = req.query;

    const queryObject = {};

    if (jobPosition) {
        queryObject.jobPosition = { $regex: jobPosition, $options: "i" }
    }
    if(skills){
        queryObject.skills={$in:skills.split('&')}
    }

    try {
        const filterJob = await jobInfo.find(queryObject).sort({createdAt:-1});
        console.log(filterJob);

        if (!filterJob) {
            return res.send("No such job available");
        }
        else {
            return res.status(200).json({ filterJob });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = filterData;