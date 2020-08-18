const unirest = require('unirest');

const request = (method, url, query) => {
    const req = unirest(method, `${process.env.YAHOO_FINANCE_FREE_API}${url}`);
    req.query(query);
    req.headers({
        'x-rapidapi-host': 'yahoo-finance-free.p.rapidapi.com',
        'x-rapidapi-key': '0b70342836mshba098e0b0ebe4b4p1fc249jsn0d92ee95c9cf',
        useQueryString: method.toLocaleLowerCase() === 'get',
    });
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log('response.body', res.body);
    });
    return req;
};

module.exports = request;
