// Problem Statement
// Given an array of integers, find the first element that appears exactly once.

// Input: let arr = [4, 5, 1, 2, 1, 4, 5, 7, 2];
// Output: 7

// If every element repeats, return -1.

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
