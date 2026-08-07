// Problem 2 — Find the Missing Number (Array Optimization)
// You are given an array containing numbers from 1 to n, but one number is missing.

// Find the missing number.

// Input: let arr = [1, 2, 3, 5, 6, 7];
// Output: 4

// Rules
// Don't sort the array.
// Don't use nested loops.

// let arr = [-2, -1, 1, 2, 3, 5, 6, 8];
let arr = [3, 4, 1, 5];

function findMissingNumber(arr) {
  let numberOfDigits = arr.length + 1;
  let expectedSum = (numberOfDigits * (numberOfDigits + 1)) / 2;
  console.log(expectedSum);
  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  console.log("Missing Number is:", expectedSum - actualSum);
}

findMissingNumber(arr);

// Time Complexity: O(1)
// Space Complexity: O(1)
