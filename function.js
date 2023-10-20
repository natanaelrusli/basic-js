// basic function
console.log("Basic Function");
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
console.log("\n");

// Anonymous function (function expression)
console.log("Anonymous function");
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 6)); // Output: 24
console.log("\n");

// arrow function
console.log("arrow function");
const divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5
console.log("\n");

// function as a parameter
console.log("function as a parameter");
function performOperation(x, y, operation) {
  return operation(x, y);
}

const result = performOperation(8, 4, (a, b) => a - b);
console.log(result); // Output: 4
console.log("\n");

// Higher-order function example
function callbackFunction() {
  console.log("I am  a callback function");
}

// higher order function
function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}

higherOrderFunction(callbackFunction);

// immidietly invoked function
let sum = (function uselessNaming(a, b) {
  return a + b;
})(5, 10);

let multi = ((a, b) => a * b)(5, 10);

console.log(sum);
console.log(multi);
