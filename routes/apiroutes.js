// Dependencies
const express = require("express");

const routes = express.Router();


// The workout model, as defined in models/models.js
const wrkoutmodel = require("../models/wrkout.js");
const mongoose = require("mongoose");

// API route for Wrkoutmodel defined on line 9
routes.post('/api/workouts', ({ body }, res) => {
    wrkoutmodel.create({})
        .then((dbwrkoutmodel) => {
            res.json(dbwrkoutmodel);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

routes.put('/api/workouts/:id', ({ params, body }, res) => {
    console.log('params', body, params);

    wrkoutmodel.findOneAndUpdate(
        { _id: params.id },
        { $push: { excercises: body } },
        { new: true }
    )
        .then((dbwrkoutmodel) => {
            res.json(dbwrkoutmodel);
        })

        // I was told I could do an async error catch that just waits for an error,
        // Though I do not know....
        .catch((err) => {
            res.json(err);
        });
});

routes.get('/api/workouts', (req, res) => {
    wrkoutmodel.find({})
    .then((dbwrkoutmodel) => {
        res.json(dbwrkoutmodel);
    })

    // Catches errors
    .catch((err) => {
        res.json(err);
    });
});

routes.get('/api/workouts/range', (req, res) => {
    wrkoutmodel.find({})
    .limit(8)
    .then((dbwrkoutmodel) => {
        res.json(dbwrkoutmodel);
    })
    
    // Catches errors
    .catch((err) => {
        res.json(err);
    });
});

module.exports = routes;