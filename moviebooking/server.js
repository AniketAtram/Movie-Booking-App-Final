// Importing necessary modules
const http = require('http');
const express = require('express');
const cors = require('cors');
const artistRouter = require("./routes/artist.routes");
const genreRouter = require("./routes/genre.routes");
const movieRouter = require("./routes/movie.routes");
const app = express();
// The port number on which the server is going to listen
const PORT = 3000;
// CORS settings
const cors_opt = {
    origin: `127.0.0.1:${PORT}`
};
// express middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors(cors_opt));

const db = require("./models");
// This will try to connect to the DB hosted at mongodb://localhost:27017/moviesdb
// which is specified inside the controller file. If connection succeeds, then 
// 'connected to database' is logged in console else the error is thrown
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Upgrad Movie booking application development.",
    });
});

app.use("/api/artists", artistRouter);
app.use("/api/genres", genreRouter);
app.use("/api/movies", movieRouter);

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server has started and is listening on port: ${PORT}`);
});