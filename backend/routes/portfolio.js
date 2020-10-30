// imports
const router = require('express').Router();
const {create, index, destroy} = require('../controllers/portfolio');
const {authRequired} = require('../middleware/valid')

// routes
router.post('/', create);
router.get('/', index);
router.delete('/:id', authRequired, destroy);

// router.get('/:id', show);
// router.put('/:id', ctrl.portfolio.update);
// router.delete('/:id', ctrl.portfolio.destroy);

// EXPORTS
module.exports = router;
