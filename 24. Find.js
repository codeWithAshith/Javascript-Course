// The find() method returns the value of the first array element that 
// satisfies the provided test function.

// Returns the value of the first element in the array that satisfies the given function.
// Returns undefined if none of the elements satisfy the function.

let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4