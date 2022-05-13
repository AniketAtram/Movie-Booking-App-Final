const genreController = require("../controllers/genre.controller");
const genreRouter = require("express").Router();

genreRouter.get("/", genreController.findAllGenres);

module.exports = genreRouter;