const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    email: {
        type: String,
        required: [true, "a valid email is needed"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;