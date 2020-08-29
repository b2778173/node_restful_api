const stockService = require('../service/stockService');

async function createTicker(req, res) {
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
        const response = await stockService.createTicker(name, marketCap, price);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
}

async function updateTicker(req, res) {
    const { name, data } = req.body;
    try {
        const response = await stockService.updateTicker(name, data);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
}

async function getStockProfile(req, res) {
    try {
        // console.log(req.query.symbol)
        const response = await stockService.getStockProfile(req.query.symbol);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
}

module.exports = {
    createTicker,
    updateTicker,
    getStockProfile
};
