// Two Pointers use:
// Why we use it
// In production code, we care about:

// Performance: Avoid O(n²) when O(n) is possible.
// Memory efficiency: Often done in-place, no extra arrays.
// Readability: A clear, standard pattern that other engineers recognize.

// Two pointers help when:
// The input is sorted (or can be sorted).
// You need to find pairs, triplets, or check conditions across elements.
// You want to compress, filter, or rearrange elements in-place

// Time and Space Complexity
// Time complexity: Usually O(n)
// Each element is visited at most a constant number of times by the pointers.

// Space complexity: Usually O(1)
// Only a few extra variables (left, right, maybe a few temps). No extra arrays (unless the problem requires returning one).

/**
 * Returns true if there exist two numbers in sorted arr that sum to target.
 * Time: O(n), Space: O(1)
 */
function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true;
    } else if (sum < target) {
      // Need a larger sum -> move left pointer to the right
      left++;
    } else {
      // sum > target -> need smaller sum -> move right pointer to the left
      right--;
    }
  }

  return false;
}

// Example usage:
const nums = [1, 2, 3, 4, 6];
console.log(hasPairWithSum(nums, 5)); // true (2 + 3)
console.log(hasPairWithSum(nums, 10)); // false
