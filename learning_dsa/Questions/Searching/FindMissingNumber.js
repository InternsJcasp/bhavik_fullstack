// First Version:

// Approach:
// We know the numbers should be from 0 to n.
// Steps:
// Start from 0.
// Check whether each number exists in the array.
// If a number doesn't exist, return it.

// const findMissingNumber = (arr) => {
//   let n = arr.length;

//   for (let i = 0; i <= n; i++) {
//     if (!arr.includes(i)) {
//       return i;
//     }
//   }
// };

// console.log(findMissingNumber([3, 0, 1]));

// Time Complexity: O(n^2): because include itself takes Object(n) O(n*n)
// Space Complexity: O(1)

// Second Version:

const findMissingNumber = (arr) => {
  let n = arr.length;

  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let number of arr) {
    actualSum += number;
  }

  return expectedSum - actualSum;
};

console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumber([0, 1]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
