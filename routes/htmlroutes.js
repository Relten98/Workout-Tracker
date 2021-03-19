// Dependancies
const express = require("express");
const paths = require("path");

module.exports = function (app) {

    // Excercises
    app.get("/exercise", (req, res) => {
        res.sendFile(paths.join(__dirname, "../public/exercise.html"));
    });

    // Index
    app.get("/", (req, res) => {
        res.sendFile(paths.join(__dirname, "../public/index.html"));
    });


    //   Stats
    app.get("/stats", (req, res) => {
        res.sendFile(paths.join(__dirname, "../public/stats.html"));
    });
};
