const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
const postRoutes = require('./postRoutes.js');

router.use('/user/:id', profileRoutes);
router.use('/posts/:user_id', postRoutes);

module.exports = router;
