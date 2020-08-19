const mongoose = require('mongoose');

const Ticker = mongoose.model(
    'ticker',
    new mongoose.Schema({
        name: String,
        marketCap: Number,
        price: Number,
    })
);
async function createTicker (name, marketCap, price) {
    const ticker = new Ticker({
        name,
        marketCap,
        price,
    });
    const result = await ticker.save();
    // console.log('createTicker successfully ', colors.yellow(result));
    return result;
}

function updateTicker (name, data) {
    // const result = await Ticker.update({ name }, data);
    // console.log('update result', result);
    return Ticker.update({ name }, data);
}

module.exports = {
    createTicker,
    updateTicker,
};
