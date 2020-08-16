// const colors = require('colors')
const tickerDao = require('../dao/tickerDao');

async function createTicker(name, marketCap, price) {

    const result = tickerDao.createTicker(name, marketCap, price);
    // console.log(colors.yellow(await tickerDao.createTicker(name, marketCap, price)))
    // console.log(colors.yellow('result=', result))
    // return `createTicker successfully  ${result}`;
    return result;
}

function updateTicker(name, data) {
    return tickerDao.updateTicker(name, data);
}

module.exports = {
    createTicker,
    updateTicker,
};