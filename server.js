// BFG DIVISION? BFG DIVISION.

// Our dependancies go here
const mongoose = require("mongoose");
const express = require("express");

// the api route
const router = require("./routes/apiroutes.js");

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
const logger = require("morgan");
 app.use(logger("dev"));


// routes
app.use(router);
require("./routes/htmlroutes.js")(app);

app.listen(PORT, () => {
  console.log(`${birds} are listening on port: ${PORT}!`);
});
let db = {};

module.exports = db;
