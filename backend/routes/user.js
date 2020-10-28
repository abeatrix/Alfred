// imports
const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/:id', ctrl.user.show);
router.put('/:id', ctrl.games.update);

module.exports = router;
