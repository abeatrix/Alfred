// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.portfolio.index);
router.get('/:id', ctrl.portfolio.show);
router.post('/', ctrl.portfolio.create);
router.put('/:id', ctrl.portfolio.update);
router.delete('/:id', ctrl.portfolio.destroy);

// EXPORTS
module.exports = router;
