const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

const create = async (req, res) => {
    try {
    // Find the user by the id set in the request
        const foundUser = await User.findById(req.userId);
        const addStock = await Portfolio.create(req.body);

        foundUser.portfolio.push(addStock);
        await foundUser.save()
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
      });
    }
  };

  const show = (req, res) => {
    const foundUser = await User.findById(req.userId);
    db.Game.findById(req.params.id, (err, foundGame) => {
        if (err) console.log('Error in games#show:', err);

        if(!foundGame) return res.status(200).json({ "message": "No game with that id found in db" });

        res.status(200).json({ "game": foundGame });
    });
};


  module.exports = {
    show,
    create,
    update,
    destroy,
  };
