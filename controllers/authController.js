const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Login in User
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // console.log("+++++++++++++++++++++++");
    // console.log("==============", email);
    const user = await User.findOne({ where: { email: email } });


    // console.log("==================>", user.id);
    // console.log("=================email========>", email);
    if (!user)
        return res.status(400).json({ error: "invalid details" })

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).json({ error: "invalid details" })

    let token = jwt.sign({ userId: user.id, name: user.firstName, email: user.email }, process.env.JWT_SECRET);
    // console.log("token==============>", token);
    // console.log("name=================>", user.firstName);
    // console.log("email================>", email);
    // console.log("id================>", user.id);


    return res.status(200).json({ jwt: token });
}
