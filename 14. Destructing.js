//Object destruction

const personInformation = {
  firstName: "Code",
  middleName: "With",
  lastName: "Ashith",
  city: "Chennai",
  state: "Tamil Nadu",
  zipcode: "600045",
};

const withoutDestructionFirstName = personInformation.firstName;

const { lastName } = personInformation;

console.log(`${withoutDestructionFirstName} ${lastName}`);

// Array Destruction

const fullNameArray = ["Code", "With", "Ashith"];

let [firstName] = fullNameArray;

console.log(firstName);

// Object literals

const addressMaker = (city, state) => {
  let address = { city, state };
  //   let address = { city: city, state: state };
  console.log(address);
};

addressMaker("chennai", "Tamil Nadu");
