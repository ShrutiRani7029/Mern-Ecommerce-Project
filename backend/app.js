const express = require("express")
const app=express();

app.use(express.json())

//Route imports
const product = require("./routes/productRoute");

app.use("/api/v1",product);


module.exports = app;


/*
This file would integrate the router with the main Express application:
1. Importing and Initializing Express
const express = require("express");
const app = express();
const express = require("express"): 
This line imports the Express library, which is used to create the Express application.
const app = express(): This initializes a new Express application instance and assigns it to the variable app. 
This instance will be used to set up middleware and define routes.


2.Middleware for Parsing JSON
app.use(express.json())
app.use(express.json()): This line adds a middleware to the Express application. The express.json() middleware parses incoming requests with JSON payloads. It is a built-in middleware in Express and is based on the body-parser module. 
This allows you to access the JSON data from the req.body object in your route handlers.

3.Importing Routes
4.use routes
5.export app

*/