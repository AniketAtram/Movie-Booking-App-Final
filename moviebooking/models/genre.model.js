module.exports = mongoose => {
    const Genre = mongoose.model(
        "genre",
        mongoose.Schema({
            genreid: {
                type: Number,
                unique: true
            },
            genre: {
                type: String
            }
        })
    );
    return Genre;
};