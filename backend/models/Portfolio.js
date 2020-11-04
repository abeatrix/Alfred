const mongoose = require(`mongoose`);

const PortfolioSchema = new mongoose.Schema(
    {
    symbol: {type: String, required: true},
    quantity: {type: Number, required: true},
    avgcost: {type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    {
    timestamps: true,
    },
);

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
