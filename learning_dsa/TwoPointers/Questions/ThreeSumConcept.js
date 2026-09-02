// Example: Input: nums= [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 0, 1], [-1, -1, 2]]

// Problem (Conceptual Understanding):
// Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that:

// i, j, k are distinct indices.
// nums[i] + nums[j] + nums[k] === 0.
// You must not return duplicate triplets.

// Approach (High-Level Concept Only)
// We’ll focus on the concept now, not full code.

// Idea:

// Reduce 3Sum to many 2Sum problems using sorting and two pointers.

// Steps (conceptual):

// Sort the array in non-decreasing order.
// This allows us to use two pointers and easily skip duplicates.

// Fix one element nums[i] and then find two other elements that sum to -nums[i]:
// For each i from 0 to n - 3:
// Treat nums[i] as the first element of the triplet.
// We now need two numbers in the rest of the array that sum to target = -nums[i].

// For the remaining part (i+1 to end), use two pointers:
// left = i + 1
// right = n - 1

// While left < right:
// Compute sum = nums[i] + nums[left] + nums[right].

// If sum === 0:
// We found a valid triplet → add [nums[i], nums[left], nums[right]].
// Move both left and right, skipping duplicates.

// If sum < 0:
// Need larger sum → left++.

// If sum > 0:
// Need smaller sum → right--.

// Skip duplicates for i, left, and right to ensure unique triplets:
// If nums[i] === nums[i - 1], skip this i.
// After finding a triplet, move left and right past any duplicates.

// This way:
// Outer loop fixes one number.
// Inner two-pointer finds the other two numbers in O(n).
// Total time: O(n²), which is acceptable for typical constraints.

function threeSumConcept() {}


// Time complexity:

// Sorting: O(n log n)
// Outer loop * inner two-pointer: O(n) × O(n) = O(n²)
// Overall: O(n²)

// Space complexity:
// Apart from the output list, we use:
// A few pointers and variables -> O(1) extra.