const userInfo = require("../../models/user.js");


const bcrypt = require("bcrypt");

const registerData = async (req, res) => {

    try {

        const { name, email, mobile, password } = req.body;
        console.log(req.body);

        if (!(name && email && mobile && password)) {
            res.status(400).send("Please Input the mentioned details");   //Asking for details
        }
        
        const oldUser = await userInfo.findOne({ email });
        console.log(oldUser);
        if (oldUser) {
            return res.status(409).send("Please login you are already registered user");  //checking whether the user is already present or not..
        }

        const encryptedPasword = await bcrypt.hash(password, 10);

        const registerInfo = await userInfo.create({
            name: name,
            email: email,
            mobile: mobile,
            password: encryptedPasword
        })
        res.status(200).send("User have registered successfully");
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = registerData;