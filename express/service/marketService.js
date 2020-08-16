const unirest = require('unirest');

const getSummary = () => {
    const req = unirest(
        'GET',
        'https://yahoo-finance-free.p.rapidapi.com/v6/finance/quote/marketSummary'
    );

    req.query({
        lang: 'en',
        region: 'US',
    });

    req.headers({
        'x-rapidapi-host': 'yahoo-finance-free.p.rapidapi.com',
        'x-rapidapi-key': '0b70342836mshba098e0b0ebe4b4p1fc249jsn0d92ee95c9cf',
        useQueryString: true,
    });
    req.end(function(res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    });
    return req;
};

const getPopular = () => {
    const req = unirest(
        'GET',
        'https://yahoo-finance-free.p.rapidapi.com/ws/screeners/v1/finance/screener/predefined/saved'
    );

    req.query({
        count: '25',
    });

    req.headers({
        'x-rapidapi-host': 'yahoo-finance-free.p.rapidapi.com',
        'x-rapidapi-key': '0b70342836mshba098e0b0ebe4b4p1fc249jsn0d92ee95c9cf',
        useQueryString: true,
    });

    req.end(function(res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    });
    return req;
};

module.exports = {
    getSummary,
    getPopular,
};