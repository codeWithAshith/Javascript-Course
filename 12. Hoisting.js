// JavaScript Hoisting refers to the process whereby the interpreter appears to move
// the declaration of functions, variables or classes to the top of their scope,
// prior to execution of the code.


// Function Hoisting

catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/

// Variable Hoisting

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

//let and const hoisting
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
