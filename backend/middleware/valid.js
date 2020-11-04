// Validations Checker

const {check} = require('express-validator');
require('dotenv').config()
const jwt = require("jsonwebtoken");

exports.authRequired = (req, res, next) => {
    console.log(req)
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const token = bearerHeader.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET, function (err, payload) {
        if (err) return res.status(500).json({ message: "Invalid token" });

        req.userId = payload._id; //set user id for routes to use
        next();
      });
    } else {
      res.sendStatus(403);
    }
  };



exports.validSignup = [
    check('username', 'Userame is required').notEmpty()
    .isLength({
        min: 4,
        max: 20
    }).withMessage('username must be between 4 to 20 characters'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]


exports.forgotPasswordChecker = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordChecker = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];

