module.exports = mongoose => {
    const Movie = mongoose.model(

        "movie",
        mongoose.Schema({
                movieid: {
                    type: Number,
                    unique: true
                },
                title: {
                    type: String
                },
                published: {
                    type: Boolean
                },
                released: {
                    type: Boolean
                },
                poster_url: {
                    type: String
                },
                release_date: {
                    type: String
                },
                publish_date: {
                    type: String
                },
                artists: [{
                    artistid: Number,
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
                        type: String
                    },
                    movies: []
                }],
                genres: [String],
                duration: {
                    type: Number
                },
                critic_rating: {
                    type: Number
                },
                trailer_url: {
                    type: String
                },
                wiki_url: {
                    type: String
                },
                story_line: {
                    type: String
                },
                shows: [{
                    id: {
                        type: Number
                    },
                    theatre: {
                        name: {
                            type: String
                        },
                        city: {
                            type: String
                        }
                    },
                    language: {
                        type: String
                    },
                    show_timing: {
                        type: String
                    },
                    available_seats: {
                        type: String
                    },
                    unit_price: {
                        type: Number
                    }

                }]

            }

        )
    );

    return Movie;
};