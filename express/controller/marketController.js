const marketService = require('../service/marketService');

const marketSummary = async (req, res) => {
    try {
        const response = await marketService.getSummary();
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};
const popular = async (req, res) => {
    try {
        const response = await marketService.getPopular();
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};
const autocomplete = async (req, res) => {
    try {
        const response = await marketService.autocomplete(req.query.query);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};

module.exports = {
    marketSummary,
    popular,
    autocomplete,
};
