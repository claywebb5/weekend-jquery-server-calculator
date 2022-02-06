// <SERVER SETUP>------------------------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
// <SERVER SETUP>------------------------------------------------------------------------------

// <GLOBAL>--------------------------------------------------------------------------------------
const mathHistory = []; // Declaring empty array to store created objects
// <GLOBAL>--------------------------------------------------------------------------------------

// <POST LAND>------------------------------------------------------------------------------------
app.post('/math', (req, res) => {

    let mathObject = req.body; // Empty object to push into our mathHistory array
    console.log('The new mathObject is:', mathObject);

    mathObject.total = calculate(mathObject);

    mathHistory.push(mathObject);
    res.send('It\'s working!!');
}) // End post
// <POST LAND>------------------------------------------------------------------------------------

function calculate(mathObject) {
    let firstNumber = mathObject.firstNumber;
    let secondNumber = mathObject.secondNumber;

    // Switch statement to do calculation
    switch (mathObject.mathOperator){
        case '+':
            total = +firstNumber + +secondNumber;
            return total;
        case '-':
            total = firstNumber - secondNumber;
            return total;
        case '*':
            total = firstNumber * secondNumber;
            return total;
        case '/':
            total = firstNumber / secondNumber;
            return total;
    }
} // End calculate function


// <GET LAND>------------------------------------------------------------------------------------
app.get('/math', function(req, res){
    console.log('Request at /math was made', mathHistory);
    res.send(mathHistory);
})

// <GET LAND>------------------------------------------------------------------------------------

// <BOTTOM>----------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })
// <BOTTOM>----------------------------------------------------------------------------------
  
  