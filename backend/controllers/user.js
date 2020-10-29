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

    exports.destroy = (req, res) => {
        User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
            if (err) console.log('Error in user#destroy:', err);

            if(!deletedUser) return res.status(200).json({ "message": "No User with that id found in db" });

            res.status(200).json({ "user": deletedUser });
        });
    };
