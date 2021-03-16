// Dependencies
const express = require("express");

// Just for our beloved paths
let paths = require('path')

// Sets up a path to all three of the pre-provided .js files in the initial set up.
module.exports = function (wrkapp) {

    wrkapp.get("/", (req, res) => {
        // Excercises that you can input
        res.sendfile(paths.join(__dirname, "public/excercise.js"));
    });

    wrkapp.get("/", (req, res) => {
        // Our core index file
        res.sendfile(paths.join(__dirname, "public/index.js"));
    });

    wrkapp.get("/", (req, res) => {
        // Excercise statistics
        res.sendfile(paths.join(__dirname, "public/stats.js"));
    });
};