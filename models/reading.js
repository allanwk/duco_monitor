const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readingSchema = new Schema({
    percentage: Number,
    plugged: String,
    temperature: Number,
    current: Number,
    datetime: { type: Date, default: Date.now },
    balance: Number
})

const Reading = mongoose.model('reading', readingSchema)

module.exports = Reading;