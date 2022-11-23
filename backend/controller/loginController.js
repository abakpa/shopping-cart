const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async(req, res) => {
    const { email, password } = req.body;
    if (!email === "" || !password === "") {
        return res.send("email and password needed");
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.send("Invalid email....");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            status: 1000,
            message: "Signin failed",
            error: "Invalid user credentials",
        });
    }
    // console.log(user._id, user.email);
    const token = jwt.sign({ id: user._id, email: user.email },
        process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_LIFETIME }
    );
    // return res.json(`${user.name}, you are welcome... ${token}`);
    return res.status(200).json({
        status: 10001,
        message: "Login successful",
        data: {
            user: user.name,
            token,
        },
    });
};

module.exports = {
    loginUser,
};