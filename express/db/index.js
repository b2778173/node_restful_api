const mongoose = require('mongoose');
const colors = require('colors');

const mongoDB = () => {
    mongoose
        .connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(colors.green('connected to DB successfully...')))
        .catch((err) => console.log(colors.red('DB connnected fail...', err)));
}

module.exports = mongoDB