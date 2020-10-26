const router = require('express').Router();


const { auth } = require('../controllers')


router.post('/signup', auth.registerController)

module.exports = router;
