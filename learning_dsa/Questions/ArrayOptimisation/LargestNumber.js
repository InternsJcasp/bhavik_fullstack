// Problem 2 — Array Optimization (Easy)
// Problem Statement

// Given an array of integers, find the largest element without sorting the array.

// Input
// arr = [45, 12, 89, 7, 56, 90, 23];

// Output: 90

// Approach:
// v1 uses sorting to arrange all elements and then takes the last element.
// v2 uses a single traversal and keeps track of the largest element found so far.
// v2 is optimized because we only need the largest element, so sorting the complete array is unnecessary.

// First Version - v1
// using sort
let arr1 = [45, 12, 89, 7, 56, 90, 23];

let sorted_arr = arr1.sort((a, b) => a - b); // Stores the array after sorting it in ascending order.
console.log(sorted_arr.at(-1)); // Gets the last element, which is the largest element.

// Time Complexity: O(n log n)
// Space Complexity: O(log n) — depends on the JavaScript engine's sorting implementation.

// Second Version - v2
// finding largest Number

let arr1 = [45, 12, 89, 7, 56, 90, 23];
let largest = arr1[0]; // Stores the largest element found so far. We start with the first element.

for (let i = 0; i < arr1.length; i++) {
  // Traverses the array once to check every element.
  if (arr1[i] > largest) {
    // Checks whether the current element is larger than the current largest.
    largest = arr1[i]; // Updates largest when a bigger element is found.
  }
}

console.log(largest);

// Time Complexity: O(n)
// Space Complexity: O(1)
