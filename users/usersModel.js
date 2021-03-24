const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersModel = new Schema({
    username: {
        type: String,
        unique: [true, "This username already exist"],
        required: [true, "Please provide an username"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    }
});

module.exports = mongoose.model("Users", usersModel);