// Nullish Coalescating OPerators are used when we fallback for null or undefined it will go for another variable only if first one is null or undefined

// const name = "Bhavik";
// const firstName = null;

// const userName = name ?? "Rahul";
// console.log(userName);

// const userName = firstName ?? "Rahul";
// console.log(userName);

// || vs ??:
// const count = 0;
// console.log(count || 10);
// console.log(count ?? 10);

// || considers multipple things as falsy or missing values like:
// false
// 0
// ""
// null
// undefined
// NaN

// ?? considers only null or undefined as missing values

// Real World Example:
const user = {
  name: "Pratham",
  age: 0,
};

const age = user.age ?? 18;
console.log(age);

// age remains 0, because 0 is a valid value.