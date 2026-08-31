// Problem Statement
// Given an array of integers, find the first element that appears exactly once.

// Input: let arr = [4, 5, 1, 2, 1, 4, 5, 7, 2];
// Output: 7

// If every element repeats, return -1.

// First Version - v1
let arr = [4, 5, 1, 2, 1, 4, 5, 7, 7, 2, 9, 9];

let frequency_counter = {};

function findFirstNonRepeatingNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!frequency_counter[arr[i]]) {
      frequency_counter[arr[i]] = 1;
    } else {
      frequency_counter[arr[i]] = 0;
    }
  }
  for (let key in frequency_counter) {
    if (frequency_counter[key] === 1) {
      return key;
    }
  }
  return -1;
}

console.log(findFirstNonRepeatingNumber(arr));
console.log(frequency_counter);

// Time Complexity: O(n)
// Space Complexity: O(n)
// valid solution but will fail if same number occurs for 3 times
// for ex: arr = [4, 5, 1, 2, 1, 4, 5, 7, 7, 7, 2, 9]


// Second Version - v2
let arr = [4, 5, 1, 2, 1, 4, 5, 7, 7, 7, 2, 9];

let frequency_counter = {};

function findFirstNonRepeatingNumber(arr) {
  for (let num of arr) {
    frequency_counter[num] = (frequency_counter[num] || 0) + 1;
  }
  for (let key of arr) {
    if (frequency_counter[key] === 1) {
      return key;
    }
  }
  return -1;
}

console.log(findFirstNonRepeatingNumber(arr));
console.log(frequency_counter);

// Time Complexity: O(n)
// Space Complexity: O(n)
