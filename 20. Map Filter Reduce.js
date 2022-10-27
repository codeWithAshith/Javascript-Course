const arr = [5, 1, 3, 6];

// // Map

// // map is used to transform an array
// // returns an array

// // ex
// // Double - [10, 1, 6, 12]

// const double = (num) => number * 2;

// const output = arr.map(double);

const output = arr.map((a) => a * 2);

console.log(output);

// // Filter

// // is used filter an array based on the given condition
// // returns a new array

// // ex
// // filter odd numbers

// const isOdd = (number) => {
//   return x % 2;
// };
// // const isOdd = (number) => x % 2;

// // // const output = arr.filter(isOdd);
// // const output = arr.filter((num) => x % 2);
// const output = arr.filter((num) => {
//   return x % 2;
// });

// Reduce

// it doesnot reduce anything
//
// returns a single value and not an array

// ex
// find the sum

// const sumOfArray = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
// };

// console.log(sumOfArray(arr));

// const output = arr.reduce((acc, cuu) => {
//   acc = acc + sum;
//   return acc;
// }, 0);

// console.log(output);

// find the max from an array

// const output = arr.reduce((max, cur) => {
//   if (curr > max) {
//     max = cur;
//   }
//   return max;
// }, 0);

// console.log(output);

// const users = [
//   { firstName: "Akshay", lastName: "Kumar", age: 40 },
//   { firstName: "Donard", lastName: "Trump", age: 75 },
//   { firstName: "Elon", lastName: "Musk", age: 40 },
// ];

// // const output = users.map((name) => name.firstName + " " + name.lastName);

// // console.log(output);

// const output = users.filter((name) => name.age === 40);

// console.log(output);
