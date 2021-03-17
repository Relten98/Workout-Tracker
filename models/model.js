// Dependancies
const mongoose = require("mongoose");

// This is just here for mongoose.
const Schema = mongoose.Schema;

// Our schema for workouts
const wrkoutSchema = new Schema(
    {
        // This is to log the current date when entered
        day: { type: Date, default: () => new Date() },

        // This is the ACTUAL Schema
        exercises: [
            {
                type: {
                    // Type of excercise
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number,
            },
        ],
    },
);

// Sets everything to export out.
const Wrkoutmodel = mongoose.model("Workout", wrkoutSchema);

// Exports the model for routes/apiroutes.js to call
module.exports = Wrkoutmodel;