// Problem 2 — Find the Missing Number (Array Optimization)
// You are given an array containing numbers from 1 to n, but one number is missing.

// Find the missing number.

// Input: let arr = [1, 2, 3, 5, 6, 7];
// Output: 4

// Rules
// Don't sort the array.
// Don't use nested loops.

// let arr = [1, 2, 5];
let arr = [-2, -1, 1, 2, 3, 5, 6, 8];
function findMissingNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i] + 1 === arr[i + 1])) {
      console.log(arr[i] + 1);
    }
  }
}

findMissingNumber(arr);

// Time Complexity: O(n)
// Space Complexity: O(1)
