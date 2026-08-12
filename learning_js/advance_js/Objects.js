// How To create an Object:

// First Way:
const user = {
  firstName: "Bhavik",
  lastName: "Sharma",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(user);
console.log(user.fullName());

// Second Way:
const person = {}; // empty Object

person.name = "Rahul";
person.age = 29;

console.log(person);

// Third way: creating an Object using new Object keyword

const anotherUser = new Object({
  name: "Ravi",
  age: 30,
});

console.log(anotherUser);

// Object Properties:

// Accessing Object fields and Values: There are 2 ways for this- dot notation and bracket notation

// dot notation:
console.log(person.name);

// bracket Notation:
console.log(anotherUser["name"]);

// changing properties:
person.age = 10;

// Adding new properties:
person.nationality = "English";

// deleting a property of an object:
delete person.age;
delete person["age"];

// check if Property exists or not:
let result = "firstName" in person;
console.log(result);

// Nested Objects:
let myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars);

// properties in Nested Objects:
console.log(myObj["myCars"]["car2"]);

// Object Methods:

let userDetails = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function () {
    return this.id;
  },
};

// Adding Javascript Method:
userDetails.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(userDetails);
