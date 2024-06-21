#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject); // Output the original object

// Update the value property of myObject
myObject.value = 89;

console.log(myObject); // Output the updated object
