const express = require('express');
const router = express.Router();

// render index page
router.get('/shippingInfo', (req, res) => { res.render('checkout/shippingInfo') })
router.get('/payment', (req, res) => { res.render('checkout/payment') })
router.get('/e-receipt', (req, res) => { res.render('checkout/e-receipt') })
router.get('/mail-receipt', (req, res) => { res.render('checkout/mail-receipt') })
router.get('/success', (req, res) => { res.render('checkout/success') })

module.exports = router;