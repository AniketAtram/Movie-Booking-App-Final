// Importing necessary modules
const http = require('http');
const status = require('http-status-codes');
// The port number on which the server is going to listen
const PORT = 9000;
// Status codes used for callbacks
const OK = status.StatusCodes.OK; // 200
const NOT_FOUND = status.StatusCodes.NOT_FOUND; // 404

// TODO: CONNECT TO Mongodb INSTANCE AND CHECK THE CONNECTION
// AND VALIDATE IF CONFIG IS CORRECTLY DONE

const db = require("./models");
// This will try to connecct to the DB hosted at mongodb://localhost:27017/moviesdb
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
// const myServer = http.createServer((req, res) => {
//     // Parse the url entered by user
//     let pathname = req.url;
//     // redirect the user to the specified pages
//     if (pathname === "/" || pathname === " ") {
//         res.writeHead(OK, {
//             "Content-Type": "text/html"
//         });
//         res.end("<h1>Welcome to the server</h1>");
//     } else if (pathname === "/movies") {
//         res.writeHead(OK, {
//             "Content-Type": "text/html"
//         });
//         res.end("All Movies Data in JSON format from Mongo DB");
//     } else if (pathname === "/genres") {
//         res.writeHead(OK, {
//             "Content-Type": "text/html"
//         });
//         res.end("All Genres Data in JSON format from Mongo DB");
//     } else if (pathname === "/artists") {
//         res.writeHead(OK, {
//             "Content-Type": "text/html"
//         });
//         res.end("All Artists Data in JSON format from Mongo DB");
//     } else {
//         res.writeHead(NOT_FOUND, {
//             "Content-Type": "text/html"
//         });
//         res.end("404 PAGE NOT FOUND");
//     }

// });

// myServer.listen(PORT, '127.0.0.1', () => {
//     console.log(`Sever started and is listening on port: ${PORT}`);
// });