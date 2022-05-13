const status = require('http-status-codes');
const db = require("../models");
const Artist = db.artists;
// Status codes used for callbacks
const OK = status.StatusCodes.OK; // 200
const NOT_FOUND = status.StatusCodes.NOT_FOUND; // 404
async function findAllArtists(req, res) {
    try {
        const data = await Artist.find({});
        res.status(OK).json({
            status: OK,
            artists: data
        });
    } catch {
        res.status(NOT_FOUND).json({
            sataus: NOT_FOUND,
            message: "Data not found!"
        });
    }
}
module.exports = {
    findAllArtists
};