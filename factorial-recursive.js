// Recursive function to calculate factorial
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

// Test the recursive function
const result = factorial(5);
console.log(`Factorial of 5 is: ${result}`); // Output: 120
