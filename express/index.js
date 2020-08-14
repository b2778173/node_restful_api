const colors = require('colors');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(8080, function() {
    console.log(colors.blue('listing at part 8080...'));
});