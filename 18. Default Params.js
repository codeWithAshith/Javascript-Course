
// default params
const add = (numbers = []) => {
  let total = 0;
  numbers.forEach((number) => {
    total = total + number;
  });

  console.log(total);
};

// params not passed
add();
