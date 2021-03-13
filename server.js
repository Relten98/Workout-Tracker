// LETS DO THIS!!!!
// { INSERT BFG DIVISION HERE.}

// Dependencies
const express = require('express');
const mongoose = require("mongoose");
const db = require("../models");


// Imports express to a proper var
const app = express();
// Very important.
const birds = 15000;

// Load models folder
const db = require('./models');

// Port information
const PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/seeders'));
app.use(express.static('./'));


// Static directory
app.use(express.static('public'));

// Routes

// { INSERT ROUTES HERE. }

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`${birds} are listening in on PORT ${PORT}`)
});