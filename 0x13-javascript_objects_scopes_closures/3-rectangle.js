#!/usr/bin/node
module.exports = class Rectangle {
  // Constructor
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      // If either width or height is not a positive integer, create an empty object
      return {}; // Return an empty object
    }

    // Initialize instance attributes
    this.width = w;
    this.height = h;
  }

  // Instance method to print the rectangle
  print () {
    if (!this.width || !this.height) {
      console.log('Empty Rectangle');
      return;
    }

    // Print the rectangle using 'X'
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }
};
