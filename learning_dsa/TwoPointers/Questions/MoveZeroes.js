// Given an integer array nums, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.

// Requirements:
// Do this in-place (modify nums directly).
// Do not allocate extra space proportional to n.
// Minimize operations (ideally one pass).

// Example-1:
// Input: nums = [0,1,0,3,12]
// Output: nums becomes [1,3,12,0,0]

// Example-2:
// Input: nums = [0]
// Output: nums becomes [0]

// Approach: Idea:

// Use two pointers:
// insertPos → position where the next non-zero should be placed.
// i → current scanning index.

// First pass:
// Scan through the array with i.
// Whenever nums[i] is non-zero:
// Put it at nums[insertPos].
// Increment insertPos.

// After this pass:
// All non-zero elements are packed at the front, in original order.
// insertPos is now the index where the first zero should go.

// Second pass:
// From insertPos to end of array, fill with 0.

/**
 * Move all zeroes to the end of the array in-place,
 * maintaining the relative order of non-zero elements.
 * Time: O(n), Space: O(1)
 */

function moveZeroes(nums) {
  let insertPos = 0; // position to place next non-zero

  // First pass: move all non-zeroes to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Second pass: fill the rest with zeroes
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // [1, 3, 12, 0, 0]

const nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2); // [1, 0, 0]
