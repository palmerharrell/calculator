var resultEl = document.getElementById("result");

// Button references
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");

// Text input references
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");

// Event Listeners
addButton.addEventListener("click", function() {
  resultEl.innerHTML = calculate(input1.value, input2.value, add);
});

subtractButton.addEventListener("click", function() {
  resultEl.innerHTML = calculate(input1.value, input2.value, subtract);
});

multiplyButton.addEventListener("click", function() {
  resultEl.innerHTML = calculate(input1.value, input2.value, multiply);
});

divideButton.addEventListener("click", function() {
  resultEl.innerHTML = calculate(input1.value, input2.value, divide);
});

// Math functions
function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

// Choose operation function
function calculate(num1, num2, mathFunc) {
  return mathFunc(num1, num2);
}
