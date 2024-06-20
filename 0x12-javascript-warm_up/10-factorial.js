#!/usr/bin/node

// Define the factorial function recursively
function factorial (n) {
  // Base case: factorial of 0 is 1
  if (isNaN(n) || n < 0) {
    return 1;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: factorial of n is n * factorial(n-1)
    return n * factorial(n - 1);
  }
}

// Retrieve and convert the first command-line argument to an integer
const num = parseInt(process.argv[2]);

// Compute factorial and print the result
console.log(factorial(num));
