const User = require('../models/User');

const show = async (req, res) => {
  try {
  // Find the user by the id set in the request
    const foundUser = await User.findById(req.userId);
    // respond with the user data
    res.status(200).json({ status: 200, data: foundUser });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = {
  show,
};
