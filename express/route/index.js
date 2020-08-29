const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const market = require('./market')
const ticker = require('./ticker')

const app = express();
// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use('/api/market', market)
app.use('/api/stock', ticker)

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




module.exports = app;