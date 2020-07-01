const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', userController.index);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

router.get('/product', productController.index);
router.post('/product', productController.create);

module.exports = router;
