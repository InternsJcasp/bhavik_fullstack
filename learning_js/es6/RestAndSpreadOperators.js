// Rest Operators:
// It is used to collect all Numbers into one variable
// Collect multiple values into one variable.

// function showNumbers(...numbers) {
//   console.log(numbers);
// }
// showNumbers(10, 20, 30, 40);

// another example:
// function addNumbers(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(addNumbers(10, 20, 30, 50));

// Rest with Normal Operators:
// function getNameAndHobbies(firstName, ...hobbies) {
//   console.log(`My Name is: ${firstName} & `);
//   console.log(hobbies); // return in an array
//   console.log(`My Hobbies are: ${hobbies}`); // return in a string
// }

// getNameAndHobbies("Bhavik", "Cricket", "Coding", "Reading");

// Spread Operators: Used to expand the Values
// Example:
// const numbers = [1, 2, 3];

// Array
// function appendNumbers(num) {
//   let newNumbers = [...num, 4, 5];
//   return newNumbers;
// }
// console.log(appendNumbers(numbers));

// Combine Arrays:
// let firstArray = [10, 20, 30, 40, 50];
// let secondArray = [100, 200, 300, 400, 500];

// function combineArray(first, second) {
//   let thirdArray = [...first, ...second];
//   return thirdArray;
// }

// console.log(combineArray(firstArray, secondArray));

// Add data from one object to another:
let user = {
  name: "Bhavik",
  age: 20,
};

let personalData = {
  ...user,
  bloodGroup: "AB+",
  graduated: "Yes",
};

console.log(personalData);

// Rest vs Spread:
// Rest   → Collect
// Spread → Expand
