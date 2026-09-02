// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order.

// Example-1:
// Input: nums = [-4, -1, 0, 3, 10];
// Output: [0, 1, 9, 16, 100];
// Squares: [16, 1, 0, 9, 100] → sorted → [0, 1, 9, 16, 100]

// Example-2:
// Input: nums = [-7, -3, 2, 3, 11];
// Output: [4, 9, 9, 49, 121];
// Squares: [49, 9, 4, 9, 121] → sorted → [4, 9, 9, 49, 121]

// Goal: Do this in O(n) time using a two-pointer approach (better than “square then sort” which is O(n log n)).

// First Version:
function squaresOfSortedArray(arr) {
  let squaredArray = [];
  for (let value of arr) {
    squaredArray.push(value * value);
  }
  return squaredArray;
}

// const array = [1, 2, 3, 4, 5];
const anotherArray = [2, 1, 3, 5, 4];
// console.log(squaresOfSortedArray(array));
console.log(squaresOfSortedArray(anotherArray));

// Second Version:
// Uses two-pointer approach in O(n) time.
// Time: O(n), Space: O(n) for result array

function sortedSquares(nums) {
  const n = nums.length;
  const result = new Array(n);

  let left = 0;
  let right = n - 1;
  let pos = n - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }

  return result;
}

// Examples:
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// [0, 1, 9, 16, 100]

console.log(sortedSquares([-7, -3, 2, 3, 11]));
// [4, 9, 9, 49, 121]
