const express = require('express');
const { marketSummary, popular, autocomplete, news } = require('../controller/marketController');

const router = express.Router();

router.get('/summary', marketSummary);

router.get('/popular', popular);

router.get('/autocomplete', autocomplete);

router.get('/news', news);

module.exports = router