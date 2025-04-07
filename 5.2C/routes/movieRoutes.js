const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getMovies);
router.post('/', movieController.addMovie);
router.post('/seed', movieController.seedMovies);

module.exports = router;