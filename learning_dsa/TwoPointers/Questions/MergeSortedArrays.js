// Problem Explanation:
// You are given two sorted integer arrays nums1 and nums2, and two integers m and n representing the number of elements in nums1 and nums2 respectively.
// nums1 has a size of m + n, where the first m elements are valid, and the last n elements are 0 (placeholders).
// nums2 has n elements.
// Merge nums2 into nums1 as one sorted array in-place in nums1.
// You must not return a new array; modify nums1 directly.

// Example-1:
// Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6],           n = 3

// Output:
// nums1 becomes [1, 2, 2, 3, 5, 6]

// Constraints:
// nums1 and nums2 are sorted in non-decreasing order.
// nums1.length = m + n, nums2.length = n.

// Approach (Two-Pointer from End)
// Idea:

// Since nums1 has extra space at the end, we should fill from the back to avoid overwriting elements we still need.

// Use three pointers:
// i = m - 1 → last valid element in nums1.
// j = n - 1 → last element in nums2.
// k = m + n - 1 → last position in nums1 (where we write the next largest element).

// Algorithm:
// While j >= 0 (while there are elements in nums2 left to merge):
// Compare nums1[i] and nums2[j]:
// If i >= 0 and nums1[i] > nums2[j]:
// Put nums1[i] at nums1[k].
// Decrement i.

// Else:
// Put nums2[j] at nums1[k].
// Decrement j.
// Decrement k.

// When j < 0, all elements from nums2 are merged.
// Any remaining elements in nums1 are already in place at the front, so we don’t need to do anything.

/**
 * Merge nums2 into nums1 in-place.
 * nums1 has size m + n, with first m elements valid, rest are 0s.
 * nums2 has size n.
 * Time: O(m + n), Space: O(1)
 */
function mergeSortedArrays(nums1, m, nums2, n) {
  let i = m - 1; // last valid element in nums1
  let j = n - 1; // last element in nums2
  let k = m + n - 1; // last position in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

mergeSortedArrays(nums1, m, nums2, n);
console.log(nums1); // [1, 2, 2, 3, 5, 6]

// Time complexity:

// Each element from nums1 (first m) and nums2 (n) is processed at most once.

// Total operations = m + n.
// O(m + n), which is effectively O(n) if you treat total size as n.

// Space complexity:
// Only three integer pointers: i, j, k.
// No extra arrays.
// O(1) extra space.