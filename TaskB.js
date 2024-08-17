"use strict";
// 100 Days Of Coding Challenge!
/** Question 59:
Add a Special Number: Make a program that creates custom adders.
These adders can add a specific number to any other number you give them later.*/
//--------------------------------------------------------------------------------
// Function to create a custom adder
function makeAdder(valueToAdd) {
    // This function returns another function that adds 'valueToAdd' to any given number
    return function (number) {
        return number + valueToAdd;
    };
}
// Set some values to add in Function makeAdder
let addFive = makeAdder(5); // Create an adder that adds 5
console.log("makeAdder:", addFive(15)); // Output: 20
let addTen = makeAdder(10); // Create an adder that adds 10
console.log("makeAdder:", addTen(40)); // Output: 50
