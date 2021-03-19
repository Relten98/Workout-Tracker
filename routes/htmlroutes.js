// Dependencies
const express = require("express");

// Just for our beloved paths
let paths = require('path')

// Sets up a path to all three of the pre-provided .js files in the initial set up.
module.exports = function (wrkapp) {

    wrkapp.get("/exercise", (req, res) => {
        // Excercises that you can input
        res.sendfile(paths.join(__dirname, "public/exercise.html"));
    });

    wrkapp.get("/", (req, res) => {
        // Our core index file
        res.sendfile(paths.join(__dirname, "public/index.html"));
    });

    wrkapp.get("/stats", (req, res) => {
        // Excercise statistics
        res.sendfile(paths.join(__dirname, "public/stats.html"));
    });
};