// BFG DIVISION? BFG DIVISION.

// Dependencies
const logger = require("morgan");

const express = require('express');

const mongoose = require("mongoose");


// Very important.
const birds = 15000;

// A handy logger
const routes = require("./routes/apiroutes.js");

// Imports express to a proper var
const app = express();

// Express stuff
app.use(logger("dev"));

app.use(express.json());
app.use(express.static("public"));

// Port information
const PORT = process.env.PORT || 8080;

// HTML routes
app.use(routes);
require("./routes/htmlroutes.js")(app);


// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/seeders'));
app.use(express.static('./'));


// Static directory
app.use(express.static('public'));


// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`${birds} are listening in on PORT ${PORT}`)
});

let db = {};

module.exports = db;