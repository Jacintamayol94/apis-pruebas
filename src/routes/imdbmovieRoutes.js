const express = require('express');
const router = express.Router();
const imdbmovieController = require('../controllers/imdbmovieController');

router.get('/imdbmovie', imdbmovieController.list)

router.get('/movies/search', imdbmovieController.getExtraMovie)

module.exports = router;

