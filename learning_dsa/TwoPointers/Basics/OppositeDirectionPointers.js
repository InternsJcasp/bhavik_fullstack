// Opposite Direction Pointers:

// Definition: Opposite Direction Pointers is a two-pointer pattern where:
// One pointer starts at the beginning of the array (left = 0).
// The other starts at the end of the array (right = n - 1).
// They move towards each other:
// left moves right (left++)
// right moves left (right--)

// The loop usually runs while left < right (or left <= right depending on the problem).

// Why we use it
// In production code, this pattern helps when:

// We need to consider pairs from both ends
// Example:
// 1. “Find two numbers that sum to target” in a sorted array.
// 2. “Maximize area between two lines” (Container With Most Water).

// We want O(n) instead of O(n²)
// Example:
// Instead of checking all pairs with nested loops, you intelligently move pointers based on conditions.

// In-place rearrangement
// Example:
// Some problems (like “move all 0s to one side”, “sort colors”, etc.) can be solved by moving elements using two ends, without extra arrays.

// Palindromes and symmetry check
// Example: Checking if a string/array is a palindrome naturally uses two pointers from both ends moving inward.

// Time and Space Complexity
// For an array of length n:

// Time complexity: O(n)
// Each element is visited at most once by either left or right.

// Space complexity: O(1)
// Only a few variables (left, right, maybe a temp for swapping). No extra arrays.

// Checking if String is Palindrome:

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return "Not a Palindrome";
    }
    left++;
    right--;
  }
  return "Given String is a Palindrome";
}

console.log(isPalindrome("raara"));
