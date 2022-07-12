const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const router = express.Router();

// render index page
router.get('/shippingInfo', requireAuth, (req, res) => { res.render('checkout/shippingInfo') })
router.get('/payment', requireAuth, (req, res) => { res.render('checkout/payment') })
router.get('/e-receipt', requireAuth, (req, res) => { res.render('checkout/e-receipt') })
router.get('/mail-receipt', requireAuth, (req, res) => { res.render('checkout/mail-receipt') })
router.get('/success', requireAuth, (req, res) => { res.render('checkout/success') })

module.exports = router;