// imports
const router = require('express').Router();
const {index, showPort} = require('../controllers/user');

// router.get('/', index);
router.get('/portfolio', showPort)

module.exports = router;
