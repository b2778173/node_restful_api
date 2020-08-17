const colors = require('colors');
const app = require('./route');
const mongoDB = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
app.listen(PORT || 5000, function () {
    console.log('\x1b[42m', '\x1b[30msuccess \x1b[0m', 'Server has started.');
    console.log(colors.blue(`listening at part ${PORT}...`));
});
mongoDB();
