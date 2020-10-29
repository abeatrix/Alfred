const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

exports.create =  async (req, res) => {
    try {
      const foundUser = await User.findById(req.userId);
      const addStock = await Portfolio.create(req.body)
      await foundUser.portfolio.push(addStock)
      await addStock.save()
      res.status(201).json({ "portfolio": addStock });
    }
    catch (err) {
      return res.status(500).json({
        status: 500,
        message: "You must be logged in to add. Please try again",
      });
    }
  }


  exports.index = async (req, res) => {
    try {
      const foundUser = await User.findById(req.userId);
        res.status(200).json({ portfolio: foundUser.portfolio });
      } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "You must be logged in to add. Please try again",
    });
      }
    }

    exports.destroy = (req, res) => {
      Portfolio.findByIdAndDelete(req.params.id, (err, deletedStock) => {
          if (err) console.log('Error in stock#destroy:', err);

          if(!deletedStock) return res.status(200).json({ "message": "No game with that id found in db" });

          res.status(200).json({ "portfolio": deletedStock });
      });
  };
