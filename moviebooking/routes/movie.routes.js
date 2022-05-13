const movieController = require("../controllers/movie.controller");
const movieRouter = require("express").Router();


movieRouter
    .route('/')
    .get(movieController.findAllMovies)


movieRouter
    .route('/:id')
    .get(movieController.findOne)


movieRouter
    .route('/:id/shows')
    .get(movieController.findShows)


module.exports = movieRouter;