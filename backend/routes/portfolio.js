// imports
const router = require('express').Router();
const {create, index} = require('../controllers/portfolio');
const {authRequired} = require('../middleware/valid')

// routes
router.post('/', authRequired, create);
router.get('/', authRequired, index);
// router.get('/:id', show);
// router.put('/:id', ctrl.portfolio.update);
// router.delete('/:id', ctrl.portfolio.destroy);

// EXPORTS
module.exports = router;
