var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index );
router.get('/cadastrar', indexController.create);
router.post('/cadastrar', indexController.store);

router.get('/pizza/:id', indexController.pizza);

module.exports = router;
