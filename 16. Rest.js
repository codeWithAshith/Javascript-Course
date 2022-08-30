const add = (...numbers) => {
  console.log(numbers);
};

add([1, 2, 3, 4]);

const show = (...args) => {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  console.log("Sum = " + sum);
};

show(10, 20, 30);
