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
    } catch (err) {
        res.status(INT_SERV_ERR).json({
            status: INT_SERV_ERR,
            message: err.message
        });
    }
};


async function findOne(req, res) {
    let id = req.params.id * 1;
    // console.log(`Requested id is: ${id}`);
    // console.log(movie.length);
    let data = await Movies.find({
        movieid: id
    });
    // console.log(data.length);
    if (data.length === 0) {
        res.status(NOT_FOUND).json({
            status: NOT_FOUND,
            message: "Invalid ID"
        });
    } else {
        res.status(OK).json(data);
    }
};


async function findShows(req, res) {
    let id = req.params.id * 1;
    let data = await Movies.find({
        movieid: id
    });
    if (!data || data.length === 0) {
        res.status(NOT_FOUND).json({
            status: NOT_FOUND,
            message: "Invalid ID"
        });
    } else {
        res.status(OK).json(data[0].shows);
    }
}
module.exports = {
    findAllMovies,
    findOne,
    findShows
};