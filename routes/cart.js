const express = require('express');
const router = express.Router();

// render index page
router.get('/',function(req,res){
    res.render('cart/cart');
})

module.exports = router;