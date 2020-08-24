const Joi = require('joi');
const colors = require('colors');
const marketService = require('../service/marketService');

const marketSummary = async(req, res) => {
    try {
        const response = await marketService.getSummary();
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};
const popular = async(req, res) => {
    try {
        const response = await marketService.getPopular();
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};
const autocomplete = async(req, res) => {
    try {
        const response = await marketService.autocomplete(req.query.query);
        res.send(response);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
};
const news = async(req, res) => {
    const schema = Joi.object({
        symbols: Joi.string().required(),
    });
    // const validResult = schema.validate(req.query);
    // console.log(colors.red(validResult))
    // if (validResult) {
    //     res.status(400).send(validResult.error.details[0].message);
    //     return;
    // }
    try {
        await schema.validateAsync(req.query);
        const response = await marketService.news(req.query.symbols);
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
    news,
};