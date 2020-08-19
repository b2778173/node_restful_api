const request = require('../util/req');

const getSummary = () => {
    const req = request('GET', '/v6/finance/quote/marketSummary', {
        lang: 'en',
        region: 'US',
    });

    return req;
};

const getPopular = () => {
    const req = request('GET', '/ws/screeners/v1/finance/screener/predefined/saved', {
        count: '25',
    });

    return req;
};

const autocomplete = (symbol) => {
    const req = request('GET', `/v6/finance/autocomplete`, {
        lang: 'en',
        region: 'US',
        query: symbol,
    });

    return req;
};

module.exports = {
    getSummary,
    getPopular,
    autocomplete,
};