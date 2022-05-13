const status = require('http-status-codes');
const db = require("../models");
const Movies = db.movies;
// Status codes used for callbacks
const OK = status.StatusCodes.OK; // 200
const INT_SERV_ERR = status.StatusCodes.INTERNAL_SERVER_ERROR; // 500
const NOT_FOUND = status.StatusCodes.NOT_FOUND; // 404
async function findAllMovies(req, res) {
    try {
        const movie = await Movies.find();
        res.status(OK).json({
            status: OK,
            movies: movie
        });
    } catch {
        res.status(INT_SERV_ERR).json({
            status: INT_SERV_ERR,
            message: err.message
        });
    }
};
module.exports = {
    findAllMovies
};