// LETS DO THIS!!!!
// { INSERT BFG DIVISION HERE.}

// Dependencies
const express = require('express');
const app = express();

// Establishes out port information
const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/seeders'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// require("./apiRoutes")(app);


// Starts the server
app.listen(PORT, function () {
    console.log(`Application is listening on port: ${PORT}`);
});