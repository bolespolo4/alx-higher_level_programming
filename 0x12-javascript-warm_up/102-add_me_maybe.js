#!/usr/bin/node

// Define the addMeMaybe function
function addMeMaybe (number, theFunction) {
  // Increment the number by 1
  const incrementedNumber = number + 1;

  // Call theFunction with the incremented number
  theFunction(incrementedNumber);
}

// Export the addMeMaybe function so it can be accessed in other files
module.exports.addMeMaybe = addMeMaybe;
