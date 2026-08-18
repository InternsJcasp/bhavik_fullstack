// Maximum SubArray:

// Approach:
// Use Kadane's Algorithm.
// currentSum stores the maximum sum of the subarray ending at the current element.
// At every element, decide whether to start a new subarray or continue the previous subarray.
// maxSum stores the maximum subarray sum found so far.

let array = [-2, 1, -3, 4, -1, 2, 1];

function maxSubArray(arr) {
  let currentSum = arr[0]; // Stores the maximum sum of the subarray ending at the current element.
  let maxSum = arr[0]; // Stores the maximum subarray sum found so far.

  for (let i = 1; i < arr.length; i++) {
    // Traverses the array from the second element.
    currentSum = Math.max(arr[i], currentSum + arr[i]); // Either start a new subarray or continue the previous one.

    maxSum = Math.max(maxSum, currentSum); // Updates maxSum if the current subarray has a larger sum.
  }

  return maxSum;
}

console.log(maxSubArray(array));

// Time Complexity: O(n)
// Space Complexity: O(1)
