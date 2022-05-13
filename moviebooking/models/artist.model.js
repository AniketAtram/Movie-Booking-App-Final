module.exports = mongoose => {
    const Artist = mongoose.model(
        "artist",
        mongoose.Schema({
            artistid: {
                type: Number,
                unique: true
            },
            first_name: {
                type: String
            },
            last_name: {
                type: String
            },
            wiki_url: {
                type: String
            },
            profile_url: {
                type: String,
            },
            movies: []
        })
    );
    return Artist;
};