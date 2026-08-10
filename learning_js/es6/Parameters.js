// Function Parameters:

// Default Parameter: Note: Default Parameter will only trigger when value is undefined it will not trigger for null values.
// function greetUser(name = "Bhavik") {
//   console.log(`My name is ${name}`);
// }

// greetUser("Rahul");
// greetUser();

// Multiple Parameter:
// function personalDetails(name, role = "User") {
//   return {
//     name,
//     role,
//   };
// }
// console.log(personalDetails("Bhavik"));
// console.log(personalDetails("Vijay", (role = "Admin")));

// checking null vs undefined in default parameters:
function test(value = 10) {
  console.log(value);
}

test(undefined); // output: 10
test(null); // output: null