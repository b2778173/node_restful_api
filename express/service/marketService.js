const { freeRequest } = require('../util/req');

function getSummary() {
    const req = freeRequest('GET', '/v6/finance/quote/marketSummary', {
        lang: 'en',
        region: 'US',
    });

    return req;
}

function getPopular() {
    const req = freeRequest('GET', '/ws/screeners/v1/finance/screener/predefined/saved', {
        count: '25',
    });

    return req;
}

function autocomplete(symbol) {
    const req = freeRequest('GET', `/v6/finance/autocomplete`, {
        lang: 'en',
        region: 'US',
        query: symbol,
    });

    return req;
}

function news(symbols) {
    const req = freeRequest('GET', `/v2/finance/news`, {
        symbols,
    });

    return req;
}

module.exports = {
    getSummary,
    getPopular,
    autocomplete,
    news,
};
