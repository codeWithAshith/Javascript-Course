let name = "code with Ashith";
let age = 40;

let person = {
  name: "code with Ashith",
  age: "40",
};

console.log(person);

//dot notation
person.name = "Ashith";
console.log(person.name);

//bracket notation
person["name"] = "Ashi";

//dynamic selection
let selection = "name";
person[selection] = 'Ashi'

console.log(person.name);
