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

exports.user = async (req, res) => {
    const user = await users.findOne({username: req.body.username});
    if (!user) {
        return res.status(400).send({message: "User not found"})
    }
    return res.send(user);
}

exports.test = (req, res) => {
    return res.send('Test');
}