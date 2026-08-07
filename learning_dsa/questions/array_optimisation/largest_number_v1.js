// Problem 2 — Array Optimization (Easy)
// Problem Statement

// Given an array of integers, find the largest element without sorting the array.

// Input
// arr = [45, 12, 89, 7, 56, 90, 23];

// Output: 90

// using sort
let arr1 = [45, 12, 89, 7, 56, 90, 23];

let sorted_arr = arr1.sort((a, b) => a - b);
console.log(sorted_arr.at(-1));
