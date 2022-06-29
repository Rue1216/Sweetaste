const express = require('express');
const router = express.Router();

// render index page
router.get('/shippingInfo',function(req,res){
    res.render('checkout/shippingInfo');
})
router.get('/payment',function(req,res){
    res.render('checkout/payment');
})
router.get('/e-receipt',function(req,res){
    res.render('checkout/e-receipt');
})
router.get('/mail-receipt',function(req,res){
    res.render('checkout/mail-receipt');
})
router.get('/success',function(req,res){
    res.render('checkout/success');
})
module.exports = router;