const express = require('express');
const router = express.Router();

// render index page
router.get('/', (req,res) => { res.render('login/login') })

module.exports = router;