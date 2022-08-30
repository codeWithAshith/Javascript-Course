let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"


// for in iterates over all enumerable properties of an object that are keyed by strings
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ":" + object[property]);
}

// for of executes a loop that operates on a sequence of values sourced from an iterable object.
// Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}