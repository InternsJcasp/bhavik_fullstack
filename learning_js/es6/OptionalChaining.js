// Optional Chaining
// let user = {};
// console.log(user.adress.city); // throws an error
// It means it throws an error whenever you try to print nested object's values but it can be solved using Optional Chaining in which it will say undefined

// console.log(user.address?.city); // ?. - Optional Chaining

// See in Nested Objects:
let user = {
  name: "Bhavik",
  age: 21,
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
  },
};

console.log(user.address?.state);
console.log(user.address?.city.pinCode);
