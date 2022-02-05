// <SERVER SETUP>------------------------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
// <SERVER SETUP>------------------------------------------------------------------------------

// <GLOBAL>--------------------------------------------------------------------------------------
const mathHistory = []; // Declaring empty array to store created objects
let arraySender = {}; // Declaring empty object to contain and send information to the DOM

arraySender.array = mathHistory; // Created a property for arraySender and set it equal to mathHistory
// <GLOBAL>--------------------------------------------------------------------------------------

// <GET LAND>------------------------------------------------------------------------------------
app.get('/math', function(req, res){
    console.log('Request at /math was made', req.body);
    res.send(arraySender);
})

// <GET LAND>------------------------------------------------------------------------------------


// <BOTTOM>----------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })
// <BOTTOM>----------------------------------------------------------------------------------
  
  