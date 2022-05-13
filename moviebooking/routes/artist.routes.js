const {
    findAllArtists
} = require("../controllers/artist.controller");
const artistRouter = require("express").Router();

artistRouter
    .route('/')
    .get(findAllArtists);

module.exports = artistRouter;