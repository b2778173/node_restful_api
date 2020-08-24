const request = require('../util/req');

function getSummary() {
    const req = request('GET', '/v6/finance/quote/marketSummary', {
        lang: 'en',
        region: 'US',
    });

    return req;
};

function getPopular() {
    const req = request('GET', '/ws/screeners/v1/finance/screener/predefined/saved', {
        count: '25',
    });

    return req;
};

function autocomplete(symbol) {
    const req = request('GET', `/v6/finance/autocomplete`, {
        lang: 'en',
        region: 'US',
        query: symbol,
    });

    return req;
};

function news(symbols) {
    const req = request('GET', `/v2/finance/news`, {
        symbols
    });

    return req;
};

module.exports = {
    getSummary,
    getPopular,
    autocomplete,
    news
};