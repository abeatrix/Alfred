// imports
const router = require('express').Router();
const {show, showPort, destroy, edit} = require('../controllers/user');
const {authRequired} = require('../middleware/valid');

router.get('/:id/portfolio', showPort);
router.put('/:id', edit);
router.get('/:id', show);
router.delete('/:id', authRequired, destroy);

module.exports = router;
