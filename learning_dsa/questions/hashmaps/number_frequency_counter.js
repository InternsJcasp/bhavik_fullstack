// First Version - v1
// using for loop
let arr = [4, 2, 4, 1, 2, 4, 5];

let freq = {};

for (let char of arr) {
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}

console.log(freq);

// Second Version - v2
// using reduce & if

let arr = [4, 2, 4, 1, 2, 4, 5];

let result = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(result);

// third version - v3
// using reduce and ternary operator

let arr1 = [10, 20, 30, 23, 34, 34, 34, 54, 54, 56, 56, 10, 20];

let result = arr1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(result);
