const User = require("../models/User");
const bcrypt = require("bcrypt");

const createUser = async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({...req.body });
    res.json({ user: user.name });
};

const getAllUser = async(req, res) => {
    try {
        const getalluser = await User.find({ status: "true" });

        res.json(getalluser);
    } catch (error) {
        res.json(error);
    }
};
const getUser = async(req, res) => {
    try {
        const getuser = await User.findById(req.params.id);
        res.json(getuser);
    } catch (error) {}
};
const updateUser = async(req, res) => {
    const {
        body: { name, department },
        params: { id: userId },
    } = req;
    const user = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
    });
    if (!user) {
        res.send("user does not exist");
    }
    res.json({ user });
};

const deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: false } }, { new: true });
        if (!deletedUser) {
            res.send("user does not exist");
        }
        res.json({ message: deletedUser });
    } catch (error) {
        console.log(error);
    }
    // const {
    //     body: { status },
    //     params: { id: userId },

    // } = req;
    // const user = await User.findByIdAndUpdate(userId, req.body, {
    //     new: true,
    //     runValidators: true,
    // });
};

// const deleteUser = async(req, res) => {
//     const deluser = req.params.id;
//     const user = await User.findByIdAndRemove(deluser);

//     if (!user) {
//         res.send("User does not exist");
//     }
//     res.send("User have been deleted successfully...");
// };

module.exports = {
    createUser,
    getAllUser,
    getUser,
    deleteUser,
    updateUser,
};