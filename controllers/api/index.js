const router = require('express').Router();
const profileRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js');

router.use('/user', profileRoutes);
router.use('/posts', postRoutes);

module.exports = router;
