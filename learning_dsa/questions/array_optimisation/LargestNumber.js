// Problem 2 — Array Optimization (Easy)
// Problem Statement

// Given an array of integers, find the largest element without sorting the array.

// Input
// arr = [45, 12, 89, 7, 56, 90, 23];

// Output: 90

// First Version - v1
// using sort
let arr1 = [45, 12, 89, 7, 56, 90, 23];

let sorted_arr = arr1.sort((a, b) => a - b);
console.log(sorted_arr.at(-1));

// Second Version - v2
// finding largest Number

let arr1 = [45, 12, 89, 7, 56, 90, 23];
let largest = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i];
  }
}

console.log(largest);
