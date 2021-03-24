var express = require('express');
var router = express.Router();
const users = require("../users/usersController")

router.get('/test', (req, res, next) => {
  res.send('/users/test route exists');
});
router.post('/', users.create);

module.exports = router;
