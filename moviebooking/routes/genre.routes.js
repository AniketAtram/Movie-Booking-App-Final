const genreController = require("../controllers/genre.controller");
const genreRouter = require("express").Router();

genreRouter
    .route("/")
    .get(genreController.findAllGenres);

module.exports = genreRouter;