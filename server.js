// BFG DIVISION? BFG DIVISION.
const logger = require("morgan");
// Our dependancies go here
const mongoose = require("mongoose");
const express = require("express");

// the api route
const router = require("./routes/api_routes.js");

// Very important.
const birds = 15000

// Ported to 8080
const PORT = process.env.PORT || 8080;

// Start a var for express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Logger info
app.use(logger("dev"));


let db = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouttrackerDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// routes
app.use(router);
require("./routes/html_routes.js")(app);

app.listen(PORT, () => {
  console.log(`${birds} are listening on: http://localhost:${PORT}`);
});

module.exports = db;
