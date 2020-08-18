const tickerService = require('../service/tickerService');

const createTicker = async (req, res) => {
    const { name, marketCap, price } = req.body;
    try {
        if (!name) {
            res.status(400).send('name is required');
            return;
        }
        if (!marketCap) {
            res.status(400).send('marketCap is required');
            return;
        }
        if (!price) {
            res.status(400).send('price is required');
            return;
        }
        const response = await tickerService.createTicker(name, marketCap, price);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};

const updateTicker = async (req, res) => {
    const { name, data } = req.body;
    try {
        const response = await tickerService.updateTicker(name, data);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};

module.exports = {
    createTicker,
    updateTicker,
};
