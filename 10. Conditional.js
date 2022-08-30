const conditional = (isTrue) => {
  if (isTrue) {
    return "Yes!, It is true";
  } else {
    return "No!, It is false";
  }
};

console.log(conditional(true));

// equality

const equality = (val) => {
  if (val == 12) {
    return "Yes!, It is equal";
  } else {
    return "No!, It is not equal";
  }
};

console.log(equality(12));
console.log(equality("12"));

// equality check with type

const equalityWithType = (numberValue, stringValue) => {
  if (numberValue === stringValue) {
    return "Yes!, It is equal";
  } else {
    return "No!, It is not equal";
  }
};

console.log(equality(12, "12"));

// Not equal to

const strictNotEqualTo = (val) => {
  if (val !== 18) {
    return "Not Equal";
  }
  return "Equal";
};

console.log(strictNotEqualTo(18));

// logical and

const logicalAnd = (val) => {
  if (val <= 50 && val >= 25) {
    return "true";
  }
  return "false";
};

console.log(logicalAnd(10));

//logical or

const logicalOr = (val) => {
  if (val <= 50 || val >= 25) {
    return "true";
  }
  return "false";
};

console.log(logicalOr(10));

const switchCondition = (val) => {
  switch (val) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log("Default case");
  }
};

console.log(switchCondition("Papayas"));
