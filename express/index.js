const colors = require('colors');
const app = require('./route');
const mongoDB = require('./db');


app.listen(5000, function() {
    console.log('\x1b[42m', '\x1b[30msuccess \x1b[0m', 'Server has started.');
    console.log(colors.blue('listening at part 5000...'));
});
mongoDB();