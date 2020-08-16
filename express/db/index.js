const mongoose = require('mongoose');
const colors = require('colors');

const mongoDB = () => {
    mongoose
        .connect(`mongodb://testapidb:XDKcnIL9dBEUVPecyyCeTPvdrtsuPMK1PFXQTe6iQx9FaoPzFqAgrWPUl9umCYfU3XStuTGXXBlY1oQyIFy7Mg%3D%3D@testapidb.mongo.cosmos.azure.com:10255/?ssl=true&appName=@testapidb@`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(colors.green('connected to DB successfully...')))
        .catch((err) => console.log(colors.red('DB connnected fail...', err)));
}

module.exports = mongoDB