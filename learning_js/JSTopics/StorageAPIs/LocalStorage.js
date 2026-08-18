// LocalStorage Methods:

// Easy Things:
// storing Data using setItem:
// localStorage.setItem('username', 'bhavik');

// Retrieving data using getItem
// const storedUsername = localStorage.getItem("username");

// Removing data using removeItem
// localStorage.removeItem('username');

// Clearing all Data:
// localStorage.clear();

// Storing Complex Data in JavaScript with JSON Serialization:

// const user = {
//   name: "Bhavik",
//   age: 21,
//   email: "bhavik123@gmail.com",
// };

// storing a user Object:
localStorage.setItem("user", JSON.stringify(user));

// Retrieving and Parsing the user Object
const storedUser = JSON.parse(localStorage.getItem("user"));
