const status = require('http-status-codes');
const db = require("../models");
const Genres = db.genres;
// Status codes used for callbacks
const OK = status.StatusCodes.OK; // 200
const INT_SERV_ERR = status.StatusCodes.INTERNAL_SERVER_ERROR; // 500

async function findAllGenres(req, res) {
    try {
        const genre = await Genres.find();
        res.status(OK).json({
            status: OK,
            genres: genre
        });
    } catch (err) {
        res.status(INT_SERV_ERR).json({
            status: INT_SERV_ERR,
            message: "Unable to fetch data."
        });
    }
};

module.exports = {
    findAllGenres,
};