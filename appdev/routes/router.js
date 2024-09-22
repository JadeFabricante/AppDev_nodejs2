const express = require('express');
const router = express.Router();
const hp = require('../Controller/hpcontrollers')

router.get('/', hp.nom)
router.get('/about', hp.about)
router.get('/product', hp.product)
router.get('/contact', hp.contact)
router.get('/testimonial', hp.testimonial)
module.exports = router;