// Dependencies
const mongoose = require("mongoose");

// Express stuff
const express = require("express");
const { Router } = require("express");
const exRouter = express.Router();

// The workout model, as defined in models/models.js
const Wrkoutmodel = require("../models/wrkoutmodel.js");


// API route for Wrkoutmodel defined on line 9
exRouter.post('/api/workouts', ({ body }, res) => {
    Wrkoutmodel.create({})
        .then((dbWrkoutmodel) => {
            res.json(dbWrkoutmodel);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

exRouter.put('/api/workouts/:id', ({ params, body }, res) => {
    console.log('params', body, params);

    Wrkoutmodel.findOneAndUpdate(
        { _id: params.id },
        { $push: { excercises: body } },
        { new: true }
    )
        .then((dbWrkoutmodel) => {
            res.json(dbWrkoutmodel);
        })

        // I was told I could do an async error catch that just waits for an error,
        // Though I do not know....
        .catch((err) => {
            res.json(err);
        });
});

exRouter.get('/api/workouts', (req, res) => {
    Wrkoutmodel.find({})
    .then((dbWrkoutmodel) => {
        res.json(dbWrkoutmodel);
    })

    // Catches errors
    .catch((err) => {
        res.json(err);
    });
});

exRouter.get('/api/workouts/range', (req, res) => {
    Wrkoutmodel.find({})
    .limit(8)
    .then((dbWrkoutmodel) => {
        res.json(dbWrkoutmodel);
    })
    
    // Catches errors
    .catch((err) => {
        res.json(err);
    });
});

let routes = {};

module.exports = routes;