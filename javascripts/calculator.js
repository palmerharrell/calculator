var resultEl = document.getElementById("result");

// In your JavaScript, put an event listener on each of the buttons.

// Copy the code below an implement a basic calculator.

// When the user performs one of the operations, output the result to another 
// DOM element of your choice.

function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}


function subract(num1, num2) {
  return num1 - num2;
}


function divide(num1, num2) {
  return num1 / num2;
}


function calculate(num1, num2, mathFunc) {
  return mathFunc(num1, num2);
}
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */