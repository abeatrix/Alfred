// imports
const router = require('express').Router();
const {create, index, detail, destroy} = require('../controllers/portfolio');
const {authRequired} = require('../middleware/valid')

// routes
router.post('/', create);
router.get('/', index);
router.get('/:id/detail', detail);
router.delete('/:id', destroy);

// EXPORTS
module.exports = router;
