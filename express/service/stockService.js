// const colors = require('colors')
const tickerDao = require('../dao/tickerDao');
const { financeRequest } = require('../util/req');

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

function getStockProfile(symbol) {
    console.log('symbol=', symbol);
    const req = financeRequest('GET', `/api/yahoo/qu/quote/${symbol}/asset-profile`);
    return req;
}

module.exports = {
    createTicker,
    updateTicker,
    getStockProfile,
};
