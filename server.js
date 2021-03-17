// BFG DIVISION? BFG DIVISION.

// Dependencies
const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes/apiroutes.js");

// Very important.
const birds = 15000;

// A handy logger
const logger = require("morgan");

// Imports express to a proper var
const wrkapp = express();

// Express stuff
wrkapp.use(logger("dev"));

wrkapp.use(express.json());
wrkapp.use(express.static("public"));

// Port information
const PORT = process.env.PORT || 8080;

// HTML router
wrkapp.use(routes);
require("./routes/htmlroutes.js")(wrkapp);


// Sets up the Express app to handle data parsing
wrkapp.use(express.static(__dirname + '/public'));
wrkapp.use(express.static(__dirname + '/seeders'));
wrkapp.use(express.static('./'));


// Static directory
wrkapp.use(express.static('public'));


// Starts the server to begin listening
wrkapp.listen(PORT, function () {
    console.log(`${birds} are listening in on PORT ${PORT}`)
});

module.exports = db;