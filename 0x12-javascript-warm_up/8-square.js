#!/usr/bin/node

// Convert the first argument to an integer
const size = parseInt(process.argv[2]);

// Check if size is NaN or less than 1
if (isNaN(size) || size < 1) {
  console.log('Missing size');
} else {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
