// <PAGE LOAD>------------------------------------------------------------------------------------
$(document).ready(readyNow);
function readyNow() {
    console.log('jQuery Running');
    getMath(); // This is calling the getMath function on page load
    $('.op-button').on('click', theOperator); // This is a click listener for which operator
    $('#equals').on('click', postSolution); // This is a click listener for equals
    $('#clear').on('click', clearCurrentEquation); // This is a click listener for clearing the inputs


} // End ready Now

// <PAGE LOAD>------------------------------------------------------------------------------------

// <GLOBAL>--------------------------------------------------------------------------------------
let mathOperator = ''; // Empty string to hold the math operator
// <GLOBAL>--------------------------------------------------------------------------------------

function theOperator(){
    mathOperator = $(this).data('value');
    console.log('theOperator is:', mathOperator);
} // End theOperator function

// <POST LAND>------------------------------------------------------------------------------------
function postSolution(){
    console.log('Running postSolution function');

    let currentSet = {
        firstNumber: Number($('#firstNumber').val()),
        secondNumber: Number($('#secondNumber').val()),
        mathOperator: mathOperator
    }

    $.ajax({
        method: 'POST',
        url: '/math',
        data: currentSet
    }).then(function(response){
        console.log('SUCCESS!!!', response);
        getMath(); // Trigger GET function again
    }).catch(function(error){
        console.log('Error POST to server', error);
    });
    clearCurrentEquation();
} // End postSolution function
// <POST LAND>------------------------------------------------------------------------------------


// <GET LAND>------------------------------------------------------------------------------------
function getMath(){
    console.log('In getMath function');
    $.ajax({
        method: 'GET',
        url: '/math',
    }).then(function(response){
        console.log('Great success', response);
        $('#currentAnswer').empty();
        if(response.length > 0){
            $('#currentAnswer').append(response[response.length-1].total);
        }
        renderMath(response); // ERROR ERROR ERROR ERROR ERROR ----------- ----- ----- -----
    })
    .catch(function(error){
        console.log('Error from server', error);
    });
} // End getAddition function
// <GET LAND>------------------------------------------------------------------------------------

// function solution(){
//     console.log('Running the solution function');
//     const firstNumber = Number($('#firstNumber').val());
//     const secondNumber = Number($('#secondNumber').val());
//     dataForServer.firstNumber = firstNumber;
//     dataForServer.secondNumber = secondNumber;

//     postSolution(); // calling post to run when the solution function is run
    
//     // clearCurrentEquation(); // To clear the inputs when = is clicked
// } // End solution function



function renderMath(response){
    $('#pastAnswers').empty(); // Clear past solutions
    for(let item of response){
        $('#pastAnswers').append(`
        <li>
            ${item.firstNumber}
            ${item.mathOperator}
            ${item.secondNumber}
            =
            ${item.total}
        </li>`);
    };
} // End renderMath function


// <CLEAR>----------------------------------------------------------------------------------
function clearCurrentEquation(){
    console.log('User Inputs Cleared');
    $('#firstNumber').val('');
    $('#secondNumber').val('');
} // End clearCurrentEquation function
// <CLEAR>----------------------------------------------------------------------------------
