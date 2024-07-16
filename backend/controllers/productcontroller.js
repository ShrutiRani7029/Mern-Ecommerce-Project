exports.getAllProducts = (req,res) =>{
    res.status(200).json({message:"Route is working fine"})
}

/*
This file exports a function getAllProducts that handles a GET request to the /products route:

Purpose: This function is a route handler. When a GET request is made to the /products route, this function
sends a response with a status code of 200 (OK) and a JSON object with a message indicating that the route is working fine.
Parameters:
req: The request object, containing information about the HTTP request.
res: The response object, used to send back the desired HTTP response.


*/