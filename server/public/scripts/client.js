// <PAGE LOAD>------------------------------------------------------------------------------------
$(document).ready(readyNow);
function readyNow() {
    console.log('jQuery Running');
    getMath(); // This is calling the getMath function on page load
    $('#plus').on('click', theOperator); // This is a click listener for plus
    $('#subtract').on('click', theOperator); // This is a click listener for subtract
    $('#multiply').on('click', theOperator); // This is a click listener for multiply
    $('#divide').on('click', theOperator); // This is a click listener for divide
    $('#equals').on('click', ); // This is a click listener for equals
    $('#clear').on('click', clearCurrentEquation); // This is a click listener for clearing the inputs

} // End ready Now

// <PAGE LOAD>------------------------------------------------------------------------------------

// <GLOBAL>--------------------------------------------------------------------------------------
const dataToPost = {}; // Empty object to put data in to post to server
let arrayForDom = []; // Empty array to hold the response from the server to the DOM
// <GLOBAL>--------------------------------------------------------------------------------------

function theOperator(){
    console.log('In theOperator function');
    const mathOperator = $(this).data('math');
    dataToPost.mathOperator = mathOperator;
} // End theOperator function

// <GET LAND>------------------------------------------------------------------------------------
function getMath(){
    console.log('In getMath function');
    $.ajax({
        method: 'GET',
        url: '/math',
    }).then(function(response){
        console.log('Great success', response);
        arrayForDom = response.array;
        renderMath(response);
    })
    .catch(function(response){
        console.log('Ope no luck', response);
    })
} // End getAddition function
// <GET LAND>------------------------------------------------------------------------------------


// <POST LAND>------------------------------------------------------------------------------------

// <POST LAND>------------------------------------------------------------------------------------

// <CLEAR>----------------------------------------------------------------------------------
function clearCurrentEquation(){
    console.log('User Inputs Cleared');
    $('#firstNumber').val('');
    $('#secondNumber').val('');
} // End clearCurrentEquation function
// <CLEAR>----------------------------------------------------------------------------------
