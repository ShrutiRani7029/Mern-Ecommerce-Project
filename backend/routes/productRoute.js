const express = require("express");
const { getAllProducts } = require("../controllers/productcontroller");

const router=express.Router();

router.route("/products").get(getAllProducts);


module.exports=router;


/*
This file sets up the route for the /products endpoint using Express:

Dependencies:
express: This is the Express framework.
getAllProducts: This is the function we defined earlier in productcontroller.js.

1)creating a router
const router = express.Router();
This creates a new router object that we can use to define routes.

2)defining a route
router.route("/products").get(getAllProducts);
This sets up a route for /products such that when a GET request is made to this route, 
the getAllProducts function is called to handle the request.

3)exporting a router
module.exports=router;
This exports the router so that it can be used in the main application file (e.g., app.js).


*/