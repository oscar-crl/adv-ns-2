var express = require('express');
var router = express.Router();
const users = require("../users/usersController")

router.post('/', users.create);
router.get('/', users.user);
router.get('/test', users.test);

module.exports = router;
