#!/usr/bin/node

// Retrieve command-line arguments and convert them to integers
const numbers = process.argv.slice(2).map(Number);

// Check the number of arguments
if (numbers.length === 0 || numbers.length === 1) {
  console.log(0);
} else {
  // Sort the numbers in descending order
  numbers.sort((a, b) => b - a);

  // Find the second largest number
  const secondLargest = numbers[1];

  // Output the result
  console.log(secondLargest);
}
