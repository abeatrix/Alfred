const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

exports.create =  async (req, res) => {
    try {
      const foundUser = await User.findById(req.body.userId);
      const addStock = await Portfolio.create(req.body)
      await foundUser.portfolio.push(addStock)
      await foundUser.save()

      res.status(201).json({ "portfolio": addStock });
    }
    catch (err) {
      console.log(err)
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

exports.destroy = async (req, res) => {
  const foundPort = await Portfolio.findById(req.params.id);
  const foundUser = await User.findById(foundPort.userId);
  foundUser.portfolio.remove(foundPort)
  await foundUser.save();

    await Portfolio.findByIdAndDelete(req.params.id, (err, deletedStock) => {
      if (err) console.log('Error in stock#destroy:', err);
      if(!deletedStock) return res.status(200).json({ "message": "No Info with that id found in db" });

      res.status(200).json({ "portfolio": deletedStock });
      console.log(res)

  });
};

exports.detail = async (req, res) => {
  try {
    const foundPortStock = await Portfolio.findById(req.params.id);
      res.status(200).json({ data: foundPortStock });
  } catch (err) {
  return res.status(500).json({
    status: 500,
    message: "You must be logged in to add. Please try again",
  });
    }
}

exports.edit = async (req, res) => {
  Portfolio.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedPort) => {
    console.log(req.body)
    if (err) console.log('Error in stock#edit:', err);

    if(!editedPort) return res.status(200).json({ "message": "No stock with that id found in db" });

    res.status(200).json({ "portfolio": editedPort });
});
}
