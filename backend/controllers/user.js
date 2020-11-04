const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

exports.show = async (req, res) => {
    try {
      const foundUser = await User.findById(req.params.id);
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
      const foundUser = await User.findById(req.params.id);
      res.status(200).json({ portfolio: foundUser.portfolio});
    }
    catch (err) {
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


exports.edit = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
      if(err){
        console.log(err)
        return res.status(400).json({
          error: 'Info does not match our database.'
        })
      }
      res.status(200).json({ data: updatedUser});
    })
  }
  catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Incorrect Info.",
    });
  }
}
