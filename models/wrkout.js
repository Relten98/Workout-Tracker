// Dependancies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Our schema for workouts
const workoutSchema = new Schema(
  {
    day: { type: Date, default: () => new Date() },
    exercises: [
      {
        type: {
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
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((acc, cur) => {
    return acc + cur.duration;
  }, 0);

  return duration;
});

// Sets everything to export out.
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
