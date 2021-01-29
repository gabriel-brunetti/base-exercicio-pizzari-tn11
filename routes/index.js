var express = require('express');
var router = express.Router();
const multer = require('multer');

const indexController = require('../controllers/indexController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
var upload = multer({ storage: storage })

router.get('/', indexController.index );
router.get('/cadastrar', indexController.create);
router.post('/cadastrar', upload.any(), indexController.store);
router.get('/editar/:id', indexController.edit);
router.put('/editar/:id', upload.any(), indexController.update);
router.get('/pizza/:id', indexController.pizza);

module.exports = router;
