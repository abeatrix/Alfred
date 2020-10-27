const router = require('express').Router();

const {validSignup, validLogin, forgotPasswordChecker, }=require('../middleware/valid')

const { registerController, activateController, loginController } = require('../controllers/auth')

router.post('/signup', validSignup, registerController)
router.post('/signin', validLogin, loginController)
router.post('/activate', activateController)


module.exports = router;
