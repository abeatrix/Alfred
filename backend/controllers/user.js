const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

exports.show = async (req, res) => {
    try {
      const foundUser = await User.findById(req.userId);
        res.status(200).json({ data: foundUser });
      } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "You must be logged in to add. Please try again",
    });
      }
    }

    exports.showPort = async (req, res) => {
        try {
          const foundUser = await Portfolio.find({user: req.userId});
            res.status(200).json({ data: foundUser });
          } catch (err) {
        return res.status(500).json({
          status: 500,
          message: "You must be logged in to add. Please try again",
        });
          }
        }
