#!/usr/bin/node

// Convert the first argument to an integer
const x = parseInt(process.argv[2]);

// Check if x is NaN or less than 1
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  // Loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}

