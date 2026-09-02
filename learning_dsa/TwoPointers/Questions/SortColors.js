// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order:
// 0 → red
// 1 → white
// 2 → blue
// You must not use the library’s sort function.

// Constraints:
// nums[i] is either 0, 1, or 2.
// Do it in one pass with O(1) extra space (ideal).

// Example-1:
// Input: nums = [2,0,2,1,1,0]
// Output: nums becomes [0,0,1,1,2,2]

// Example-2:
// Input: nums = [2,0,1]
// Output: nums becomes [0,1,2]

// Approach (Three-Pointer / Two-Pointer Extension)
// Idea:

// Maintain three regions in the array using three pointers:
// low → boundary for 0s (red)
// mid → current element being examined
// high → boundary for 2s (blue)

// Invariant during the process:
// [0 … low-1] → all 0s
// [low … mid-1] → all 1s
// [mid … high] → unknown / to be processed
// [high+1 … n-1] → all 2s

// Initial state:
// low = 0
// mid = 0
// high = n - 1

// Algorithm (one pass):

// While mid <= high:

// If nums[mid] === 0:
// Swap nums[low] and nums[mid].
// Increment both low and mid.
// Reason: 0 goes to the front region; both boundaries move forward.

// If nums[mid] === 1:
// Just increment mid.
// Reason: 1 is already in the correct middle region.

// If nums[mid] === 2:
// Swap nums[mid] and nums[high].
// Decrement high.
// Do not increment mid yet, because the element swapped from high needs to be examined.

// It ensures:
// All 0s move to the front.
// All 2s move to the end.
// 1s naturally fall in the middle.
// Done in a single pass.

// Time: O(n), Space: O(1)
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[low] and nums[mid]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is in correct region, just move mid
      mid++;
    } else {
      // nums[mid] === 2
      // Swap nums[mid] and nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
      // Do NOT increment mid here
    }
  }
}

// Examples:
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // [0, 1, 2]
