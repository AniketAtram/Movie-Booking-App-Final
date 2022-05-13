// Importing necessary modules
const http = require('http');
const status = require('http-status-codes');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// The port number on which the server is going to listen
const PORT = 3000;
// Status codes used for callbacks
const OK = status.StatusCodes.OK; // 200
const NOT_FOUND = status.StatusCodes.NOT_FOUND; // 404
// CORS settings
const cors_opt = {
    origin: `127.0.0.1:${PORT}`
};
// express middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors(cors_opt));

// TODO: CREATE APP USING EXPRESS AND CORS
// AND DYNAMICALLY CREATE AND FETCH DATA FROM API

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Upgrad Movie booking application development.",
    });
});


app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server has started and is listening on port: ${PORT}`);
});
// const db = require("./models");
// // This will try to connecct to the DB hosted at mongodb://localhost:27017/moviesdb
// // which is specified inside the controller file. If connection succeeds, then 
// // 'connected to database' is logged in console else the error is thrown
// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");

//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });