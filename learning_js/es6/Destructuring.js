// Normal Way:
// const numbers = [10, 20, 30];
// const first = numbers[0];
// const second = numbers[1];

// console.log(first, second);

// Destructuring in Array:

// const numbers = [10, 20, 30];
// // const [first, second] = numbers; // take number/element consecutively
// const [first, , second] = numbers; // if you want to skip one number/element

// console.log(first);
// console.log(second);

// Default Value
// const listOfNumbers = [10, 20, 30, 40];
// const listOfNumbers = [10];

// const [first, second = 100] = listOfNumbers;
// console.log(first, second);

// Destructuring in Objects:

let user = {
  name: "Bhavik",
  age: 21,
  bloodGroup: "AB+",
};

// Normal Way:
// const name = user.name;
// const age = user.age;

// console.log(name);
// console.log(age);

// Destructuring: renaming as name and age already exists
// const { name: firstName, age: personAge } = user;
// console.log(firstName, personAge);

// Now name is used to target name of User and ...otherDetails are used to collect remaining Properties
const { name, ...otherDetails } = user;
console.log(name, otherDetails);
