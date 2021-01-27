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

/* GET home page. */
router.get('/', indexController.index );
router.get('/cadastrar', indexController.create);
router.post('/cadastrar', upload.any(), indexController.store);

router.get('/pizza/:id', indexController.pizza);


// Salve o nome da imagem no arquivo json a cada novo cadastro.
// Teste se imagens são salvas.

module.exports = router;
