// Import Dependencies 
const express = require("express");
const cors = require("cors");

// Import JSON files 
const projects = require("./projects.json");
const about = require('./about.json');

// Create our app object
const app = express();

// Set middlewear
app.use(cors());

// Home route for testing our app 
app.get('/', (req, res ,next) => {
    res.send("Hello World")
});

// Route for retrieving projects
app.get('/projects', (req, res ,next) => {
    // send projects via json
    res.json(projects)
});

// Route for retrieving about info
app.get('/about', (req, res ,next) => {
    // send projects via json
    res.json(about)
});


// declare a variable for our port number
const PORT = process.env.PORT || 4000;

// Turn on the server listener 
app.listen(PORT, () => console.log("I am trying to stay alive"))