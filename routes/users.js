var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.post('/login', usersController.auth);
router.get('/menu', usersController.menu);

module.exports = router;