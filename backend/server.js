// Import required modules
require('dotenv').config();
const express = require('express');


const app = express();



// Routs
app.get("/", (req, res)=>{
    res.send("Hello World!");
});



// Listen for request
app.listen(process.env.PORT, ()=>{
    console.log("Listening on port "+process.env.PORT+"!");
});