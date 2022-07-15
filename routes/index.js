const { Router } = require('express');
const router = Router();
// import Schema
const Product = require('../models/Product/Product');

// render index page
router.get('/', async (req, res) =>{
    try {
        let products = await Product.find({ category:"本日精選" });
        res.render('index',{
            products: products
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
})

module.exports = router;