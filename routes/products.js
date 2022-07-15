const { Router } = require('express');
const router = Router();

const { allProducts_get, productsById_get } = require('../controllers/productController');

//@dest     GET all products from db
//@route    GET /products
//@access   Public
router.get('/', allProducts_get)

//@dest     GET all products from db
//@route    GET /products
//@access   Public
router.get('/:id', productsById_get)

module.exports = router;