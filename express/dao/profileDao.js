const mongoose = require('mongoose');
const { any, string } = require('joi');

const Ticker = mongoose.model(
    'profile',
    new mongoose.Schema({
        assetProfile: Object,
        city: String,
        state: String,
        zip: String,
        marketCap: Number,
        price: Number,
    })
);
