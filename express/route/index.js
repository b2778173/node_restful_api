const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const { marketSummary, popular } = require('../controller/marketController');
const { createTicker, updateTicker } = require('../controller/tickerController');

const app = express();
// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    // Put some preprocessing here.
    console.log(colors.yellow('request from ', req.url));
    if (req.method === 'POST') {
        console.log('POST request body', req.body);
    }
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/api/createTicker', createTicker);

app.post('/api/updateTicker', updateTicker);

app.get('/api/summary', marketSummary);

app.get('/api/popular', popular);

module.exports = app;