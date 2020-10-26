const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    symbol: String,
    quantity: Number,
    cost: Number,
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
