const marketService = require('../service/marketService');

const marketSummary = async(req, res) => {
    try {
        res.send(await marketService.getSummary());
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};
const popular = async(req, res) => {
    try {
        res.send(await marketService.getPopular());
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};

module.exports = {
    marketSummary,
    popular,
};