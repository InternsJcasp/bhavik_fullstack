// 1st Concept:
// Object:

// const user = {
//   name: "Bhavik", // Object Properties.
//   age: 21,
//   introduce() {
//     console.log(`Hi My name is: ${this.name}`);
//   }, // Object Method
// };

// user.introduce();

// 2nd Concept:
// Same Methods but Different Objects:
// const student1 = {
//   name: "Bhavik",

//   sayName() {
//     console.log(this.name);
//   },
// };

// const student2 = {
//   name: "Priya",

//   sayName() {
//     console.log(this.name);
//   },
// };

// student1.sayName(); // Bhavik
// student2.sayName(); // Priya

// 3rd Concept:
// Class: It is a blueprint/structure of what you want to make.
// Example: Agar mujhe multiple users banane hain, to har user manually object likhne ke bajay mai ek class bana sakta hu.
// class User {
//   sayHello() {
//     console.log("Hello");
//   }
// }

// 4th Concept:
// // We use `new` operator to make Object from Class: Class se object banane ke liye new use karte hain:
// const User1 = new User();
// const User2 = new User();

// User1.sayHello();
// User2.sayHello();

// Yahan:
// User class hai.
// user1 object hai.
// user2 object hai.
// user1 aur user2, User ke instances hain.

// 5th Concept:
// In DSA:
// const list1 = new LinkedList();
// const list2 = new LinkedList();

// They both will be different Linked List because They are instances of Linked Lists as we seen above.

// 6th Concept:
// What is Constructors ?
// constructor() class ka special method hota hai. Jab bhi new ke saath object create hota hai, constructor automatically run hota hai.
// Constructor ka Flow:

// const user1 = new User("Bhavik", 21);
// Is statement par:
// Naya empty object create hota hai.
// this us naye object ko refer karta hai.
// Constructor execute hota hai.
// this.name = "Bhavik" property create karta hai.
// this.age = 21 property create karta hai.
// Naya object user1 mein store hota hai.

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`I am ${this.name}, age ${this.age}`);
//   }
// }

// const user1 = new User("Bhavik", 21);
// const user2 = new User("Priya", 22);
// console.log(user1.name); // Bhavik

// user1.introduce(); // I am Bhavik, age 21
// user2.introduce(); // I am Priya, age 22

// 7th Concept:
class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  getValue() {
    return this.value;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
counter.decrement();
console.log(counter.getValue()); // 1
