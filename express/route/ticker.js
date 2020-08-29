const express = require('express');
const { createTicker, updateTicker, getStockProfile } = require('../controller/tickerController');

const router = express.Router();

router.post('/createTicker', createTicker);

router.post('/updateTicker', updateTicker);

router.get('/profile', getStockProfile);

module.exports = router;
