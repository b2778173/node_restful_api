const express = require('express');
const { createTicker, updateTicker } = require('../controller/tickerController');

const router = express.Router();

router.post('/createTicker', createTicker);

router.post('/updateTicker', updateTicker);

module.exports = router