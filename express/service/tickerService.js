const tickerDao = require('../dao/tickerDao');

async function createTicker(name, marketCap, price) {
    const result = await tickerDao.createTicker(name, marketCap, price);
    return `createTicker successfully  ${result}`;
}
async function updateTicker(name, data) {
    const result = await tickerDao.updateTicker(name, data);
    return result;
}

module.exports = {
    createTicker,
    updateTicker,
};