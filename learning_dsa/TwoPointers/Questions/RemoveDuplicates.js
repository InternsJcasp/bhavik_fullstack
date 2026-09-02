// Given a sorted array nums in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// Return the new length k of the array after removing duplicates.

// Requirements:
// Do not allocate extra space for another array.
// Modify nums in-place with O(1) extra memory.
// The first k elements of nums should contain the unique elements in order.
// Elements beyond k don’t matter.

// Example-1 :
// Input: nums = [1, 1, 2]
// Output: k = 2, and nums = [1, 2, _]
// First two elements are 1 and 2

// Example-2 :
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: k = 5, and nums = [0,1,2,3,4, ...]

function removeDuplicatesFromArray(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return [(k = i + 1)];
}

// const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const array = [];
console.log(removeDuplicatesFromArray(array));

// Time Complexity: O(n)
// Space Complexity: O(1)