const users = require("./usersModel");
const bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    const user = new users({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err) => {
        if (err) {
            return res.status(400).json({message: err});
        } else {
            return res.send({
                message: "User Successfully Created",
                username: req.body.username,
            });
        }
    });
}